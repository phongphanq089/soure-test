import styled from "@emotion/styled";
import { Button, FormControl, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { getCsrfToken, getProviders, signIn } from 'next-auth/react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { CarInput } from "../src/components/CartInput/CartInput";
import { CarInputMask } from "../src/components/CartInput/CartInputMask";
import Flash from "../src/components/flash";
import axiosClient from "../src/configs/axios";
import useForm from "../src/hooks/useForm";
import { ColorStyles, TextStyles } from "../src/theme/Designs";

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
  return {
    props: {
      providers,
      csrfToken,
      title_page: "login",
    },
  };
}
export default function Signup( { providers, csrfToken } ) {
  const router = useRouter();

  const [ result, setResult ] = useState( false );
  const { formRef, valid, setValid, form, handleChange, hanldeBlur } = useForm(
    {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirm_password: "",
    },
    {
      name: true,
      email: true,
      phone: true,
      password: true,
      confirm_password: true,
    }
  );
  const handleSubmit = async ( event ) => {
    event.preventDefault();
    const error = event.target.querySelector( ".Mui-error" );
    if ( error ) {
      setValid( false );
      return;
    }
    const data = new FormData( event.currentTarget );
    const register = await axiosClient.post( "@/consumer/register", data );
    setResult( register );
    console.log( register );
    if ( register.status === true ) {
      //Login After Sign Up successfull
      signIn( providers.credentials.id, {
        redirect: false,
        email: form.email,
        password: form.password,
      } ).then( ( res ) => {
        res.status === 200 ? router.push( "/Siginup_success" ) : "";
      } );
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid container alignItems="center" justifyContent="center" my={ 3 }>
        <Grid item justifyContent="center" xs={ 11 } md={ 5 }>
          <Box textAlign={ "center" }>
            <Image src="/BlackLogo.svg" alt="" width={ 33 } height={ 36 } />
            <Typography
              mb={ 1.2 }
              mt={ 2 }
              color={ ColorStyles.gray[ 900 ] }
              fontSize={ TextStyles.displaySm.bold }
            >
              Create an account
            </Typography>
            <Typography mb={ 3 } fontSize={ TextStyles.textMd.normal }>
              Start your 30-day free trial.
            </Typography>
          </Box>

          <Flash result={ result } />
          <Box
            component="form"
            onSubmit={ handleSubmit }
            noValidate
            sx={ { mt: 1 } }
            ref={ formRef }
          >
            <input name="csrfToken" type="hidden" defaultValue={ csrfToken } />
            <FormControl fullWidth sx={ { mb: 3 } } required={ true }>
              <CarInput
                label="Name"
                placeholder="Enter your name"
                name="name"
                rules={ {
                  empty: "Your name not empty.",
                } }
                value={ form.name }
                onChange={ handleChange }
                onBlur={ hanldeBlur }
              />
            </FormControl>

            <FormControl fullWidth sx={ { mb: 3 } } required={ true }>
              <CarInput
                label="Email"
                placeholder="Enter your email"
                name="email"
                rules={ {
                  empty: "Your email not empty.",
                  email: "Your email not valid.",
                } }
                value={ form.email }
                onChange={ handleChange }
                onBlur={ hanldeBlur }
              />
            </FormControl>

            <FormControl fullWidth sx={ { mb: 3 } } required={ true }>
              <CarInputMask
                label="Phone"
                name="phone"
                placeholder="Enter your phone"
                mask="999-999-9999"
                maskChar="_"
                rules={ {
                  empty: "Your phone not empty.",
                  phone: "Your phone not valid.",
                } }
                onChange={ handleChange }
                onBlur={ hanldeBlur }
                value={ form.phone }
              />
            </FormControl>

            <FormControl fullWidth sx={ { mb: 3 } } required={ true }>
              <CarInput
                type="password"
                label="Password"
                placeholder="Create a password"
                name="password"
                rules={ {
                  empty: "Your password not empty.",
                  minLength: {
                    value: 8,
                    msg: "Must be at least 8 characters.",
                  },
                } }
                note="Must be at least 8 characters."
                value={ form.password }
                onChange={ handleChange }
                onBlur={ hanldeBlur }
              />
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="primary"
              size="large"
              sx={ {
                mb: 2,
                padding: "12px 0",
              } }
            >
              Get started
            </Button>

            <Button type="button" fullWidth variant="outlined">
              <Image src="/google_icon.svg" width={ 24 } height={ 24 } alt="" />
              &nbsp; Sign up with Google
            </Button>
            <Typography
              fontSize={ TextStyles.textSm.normal }
              mt={ 3 }
              mb={ 0 }
              textAlign="center"
              paragraph
            >
              { "Already have an account? " }
              <LinkHref>
                <Link href="/login">Log in</Link>
              </LinkHref>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
Signup.layout = "Front";
