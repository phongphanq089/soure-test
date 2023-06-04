import CryptoJS from 'crypto-js';

export default function csrfToken( req, res ) {
    try {
        if ( !req.headers.cookie ) {
            res.status( 403 ).json( { status: 'no cookie?' } );
        }

        const rawCookieString = req.headers.cookie; // raw cookie string, possibly multiple cookies
        const rawCookiesArr = rawCookieString.split( ';' );

        let parsedCsrfTokenAndHash = null;

        for ( let i = 0; i < rawCookiesArr.length; i++ ) { // loop through cookies to find CSRF from next-auth
            let cookieArr = rawCookiesArr[ i ].split( '=' );
            if ( cookieArr[ 0 ].trim() === 'next-auth.csrf-token' ) {
                parsedCsrfTokenAndHash = cookieArr[ 1 ];
                break;
            }
        }

        if ( !parsedCsrfTokenAndHash ) {
            res.status( 403 ).json( { status: 'missing csrf' } ); // can't find next-auth CSRF in cookies
        }

        // delimiter could be either a '|' or a '%7C'
        const tokenHashDelimiter = parsedCsrfTokenAndHash.indexOf( '|' ) !== -1 ? '|' : '%7C';

        const [ requestToken, requestHash ] = parsedCsrfTokenAndHash.split( tokenHashDelimiter );

        const secret = process.env.NEXTAUTH_SECRET;

        // compute the valid hash
        const validHash = CryptoJS.SHA256.update( `${ requestToken }${ secret }` ).digest( 'hex' );

        if ( requestHash !== validHash ) {
            res.status( 403 ).json( { status: 'bad hash' } ); // bad hash
        }
    } catch ( err ) {
        res.status( 500 ).json( { status: 'catch-all no' } );
    }

    // otherwise, if everything checks out ..
    let responseOutput = { status: 'success' };
    if ( req.body ) {
        // how to access data sent by client
        responseOutput[ 'received_data' ] = req.body;
    }
    res.status( 200 ).json( responseOutput );
}