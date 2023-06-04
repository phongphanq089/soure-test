import styled from "@emotion/styled";
import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  OutlinedInput,
  Typography
} from "@mui/material";
import { Box } from "@mui/system";
import { ColorStyles, TextStyles } from "@theme/Designs";
import {
  getCsrfToken,
  getProviders, getSession, signIn
} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import useAuth from "../src/hooks/useAuth";
const LinkHref = styled.span`
  a {
    text-decoration: none;
    color: #087443;
    font-family: "DM Sans";
    font-weight: 700;
  }
`;

export async function getServerSideProps( context ) {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken( context );
  const session = await getSession( context );
  // if ( !session ) {
  //   context.res.writeHead( 302, { Location: '/' } );
  //   context.res.end();
  //   return {};
  // }
  return {
    props: {
      providers,
      csrfToken,
      title_page: "login",
      // user: session.user,
    },
  };
}

export default function Login( { providers, csrfToken } ) {
  const isAuthenticated = useAuth( "/" );
  const router = useRouter();


  const handleSubmit = async ( event ) => {
    event.preventDefault();
    const data = new FormData( event.currentTarget );
    signIn( providers.credentials.id, {
      redirect: false,
      csrfToken: data.get( "csrfToken" ),
      email: data.get( "email" ),
      password: data.get( "password" ),
    } ).then( ( res ) => {
      // res.status === 200 ? router.push( "/admin" ) : "";

      console.log( res );
    } );
  };

  return (
    <Container maxWidth="lg">
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        my={ 12 }
        minHeight={ 500 }
      >
        <Grid item justifyContent="center" xs={ 11 } sm={ 6 } md={ 4 }>
          <Box textAlign={ "center" }>
            <Image src="/BlackLogo.svg" alt="" width={ 33 } height={ 36 } />
            <Typography
              mb={ 1.2 }
              mt={ 2 }
              color={ ColorStyles.gray[ 900 ] }
              fontSize={ TextStyles.displaySm.bold }
            >
              Login to your account
            </Typography>
            <Typography mb={ 3 } fontSize={ TextStyles.textMd.normal }>
              Welcome back! Please enter your details.
            </Typography>
          </Box>
          <Box component="form" noValidate sx={ { mt: 1 } } onSubmit={ handleSubmit }>
            <input name="csrfToken" type="hidden" defaultValue={ csrfToken } />
            <FormControl sx={ { width: "100%", marginBottom: "24px" } }>
              <Typography
                fontSize={ TextStyles.textSm.medium }
                color={ ColorStyles.gray[ 900 ] }
                mb="6px"
                paragraph
              >
                Email
              </Typography>
              <OutlinedInput
                required={ true }
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </FormControl>
            <FormControl sx={ { width: "100%", marginBottom: "24px" } } mb={ 4 }>
              <Typography
                fontSize={ TextStyles.textSm.medium }
                color={ ColorStyles.gray[ 900 ] }
                mb="6px"
                paragraph
              >
                Password
              </Typography>
              <OutlinedInput
                required={ true }
                type="password"
                name="password"
                placeholder="••••••••"
              />
            </FormControl>
            <FormGroup
              sx={ {
                mb: 3,
                flexDirection: "row",
                justifyContent: "space-between",
              } }
            >
              <FormControlLabel
                control={ <Checkbox /> }
                label="Remember for 30 days"
              />
              <Link href="/forgot-password">
                <Typography
                  variant="label"
                  color={ ColorStyles.primary[ 700 ] }
                  fontSize={ TextStyles.textSm.medium }
                  style={ {
                    display: "inline-flex",
                    alignSelf: "center",
                  } }
                >
                  Forgot password?
                </Typography>
              </Link>
            </FormGroup>

            <Button
              type="submit"
              fullWidth
              variant="primary"
              sx={ {
                marginBottom: "16px",
                width: "100%",
                height: "44px",
              } }
            >
              Sign in
            </Button>

            <Button
              type="button"
              fullWidth
              variant="outlined"
              onClick={ () => signIn( providers.google.id ) }
            >
              <Image src="/google_icon.svg" width={ 24 } height={ 24 } alt="" />
              &nbsp; Sign in with Google
            </Button>
            <Typography
              fontSize={ TextStyles.textSm.normal }
              mt={ 3 }
              textAlign="center"
              paragraph
            >
              { "Don’t have an account? " }
              <LinkHref>
                <Link href="/signup">Sign up</Link>
              </LinkHref>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
Login.layout = "Front";
