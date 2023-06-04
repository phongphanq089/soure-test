import axiosClient from "@configs/axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import Error from "next/error";
const jwt = require( "jsonwebtoken" );

async function refreshtoken( tokenObject ) {
    try {
        // Get a new set of tokens with a refreshToken
        const tokenResponse = await axiosClient.post( '/user/login', {
            token: tokenObject.refreshToken
        } );

        return {
            ...tokenObject,
            token: tokenResponse.data.token,
            tokenExpiry: tokenResponse.data.tokenExpiry,
            refreshToken: tokenResponse.data.refreshToken
        };
    } catch ( error ) {
        return {
            ...tokenObject,
            error: "RefreshtokenError",
        };
    }
}
export default async function auth( req, res ) {
    const providers = [
        CredentialsProvider( {
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            authorize: async ( credentials ) => {
                try {
                    // Authenticate user with credentials
                    const user = await axiosClient.post( '/user/login', {
                        password: credentials.password,
                        email: credentials.email
                    } );

                    if ( user.data.token ) {
                        return user.data;
                    }

                    return null;
                } catch ( e ) {
                    throw new Error( e );
                }
            }
        } ),
        // OAuth authentication providers
        // AppleProvider( {
        //     clientId: process.env.APPLE_ID,
        //     clientSecret: process.env.APPLE_SECRET,
        // } ),
        GoogleProvider( {
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbacks: {
                async signIn( { account, profile } ) {
                    if ( account.provider === "google" ) {
                        return profile.email_verified && profile.email.endsWith( "@example.com" );
                    }
                    return true; // Do different verification for other providers that don't have `email_verified`
                },
            }
        } ),
        // Sign in with passwordless email link
        // EmailProvider( {
        //     server: process.env.MAIL_SERVER,
        //     from: "<no-reply@example.com>",
        // } ),
    ];

    const callbacks = {
        async signIn( { user, account, profile, email, credentials } ) {
            if ( user ) {
                return true;
            } else {
                // Return false to display a default error message
                return false;
                // Or you can return a URL to redirect to:
                // return '/unauthorized'
            }
        },
        async redirect( { url, baseUrl } ) {
            // Allows relative callback URLs
            if ( url.startsWith( "/" ) ) return `${ baseUrl }${ url }`;
            // Allows callback URLs on the same origin
            else if ( new URL( url ).origin === baseUrl ) return url;
            return baseUrl;
        },
        async session( { session, token } ) {
            // Here we pass token to the client to be used in authentication with your API
            session.token = token.token;
            session.tokenExpiry = token.tokenExpiry;
            session.error = token.error;
            session.user = token.user;

            return Promise.resolve( session );
        },
        async jwt( { token, user } ) {
            if ( user ) {
                const decoded = jwt.verify( user.token, process.env.SECRET_KEY );
                // This will only be executed at login. Each next invocation will skip this part.
                token.token = user.token;
                token.tokenExpiry = decoded.exp;
                token.refreshToken = decoded.iat;

                delete user.token;
                token.user = user;
            }

            // If tokenExpiry is 24 hours, we have to refresh token before 24 hours pass.
            const shouldRefreshTime = Math.round( ( token.tokenExpiry - 60 * 60 * 1000 ) - Date.now() );

            // If the token is still valid, just return it.
            if ( shouldRefreshTime > 0 ) {
                return Promise.resolve( token );
            }

            // If the call arrives after 23 hours have passed, we allow to refresh the token.
            // token = refreshtoken( token );
            return Promise.resolve( token );
        },
        authorized( { req, token } ) {
            if ( token ) return true; // If there is a token, the user is authenticated
        }
    };

    const pages = {
        signIn: '/login',
        signOut: '/auth/signout',
        error: '/login', // Error code passed in query string as ?error=
        verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: '/' // New users will be directed here on first sign in (leave the property out if not of interest)
    };

    const isDefaultSigninPage = req.method === "GET" && req.query.nextauth.includes( "login" );

    // Will hide the `GoogleProvider` when you visit `/api/auth/signin`
    if ( isDefaultSigninPage ) providers.pop();

    return await NextAuth( req, res, {
        providers,
        session: {
            strategy: "jwt",
        },
        secret: process.env.SECRET_KEY,
        callbacks,
        pages,
        debug: true
    } );
}