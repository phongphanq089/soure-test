
import { CarInput } from "@components/CartInput/CartInput";
import axiosClient from "@configs/axios";
import useForm from "@hooks/useForm";
import { Avatar, Box, Button, Container, FormControl, Grid, Stack, Typography } from "@mui/material";
import { ColorStyles, TextStyles } from "@theme/Designs";
import { getCsrfToken } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Key, Mail } from 'react-feather';

export async function getServerSideProps( context ) {
    const csrfToken = await getCsrfToken( context );
    return {
        props: {
            csrfToken,
            titlePage: "Forgot Password",
        },
    };
}


export default function ForgotPassword( { csrfToken } ) {

    const [ result, setResult ] = useState( false );
    const { formRef, valid, setValid, form, handleChange, hanldeBlur } = useForm(
        { email: "" },
        { email: true }
    );
    const handleSubmit = async ( event ) => {
        console.log( csrfToken );
        event.preventDefault();
        const error = event.target.querySelector( ".Mui-error" );
        if ( error ) {
            setValid( false );
            return;
        }
        const data = new FormData( event.currentTarget );
        const forgot = await axiosClient.post( "@/consumer/forgot-password", data );
        setResult( forgot );

    };
    const openMailApp = () => {
        window.open( `https://${ form.email.split( "@" )[ 1 ] }` );
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
                <Grid item justifyContent="center" xs={ 12 } md={ 4 }>
                    <Box textAlign="center">
                        <Box mb={ 4 } >
                            <Avatar className="outside" sx={ { margin: "auto", width: "56px", height: "56px" } }>
                                <Avatar className="inside"
                                    sx={ {
                                        backgroundColor: "#D3F8DF",
                                        outline: "none", width: "100%",
                                        height: "100%", border: "10px solid",
                                    } }>
                                    { result ? (
                                        <Mail color="#099250" />
                                    ) : (
                                        <Key color="#099250" />
                                    ) }
                                </Avatar>
                            </Avatar>
                        </Box>
                        { result ? (
                            <>
                                <Typography textAlign="center" mb={ 1 } color={ ColorStyles.gray[ 900 ] } fontSize={ TextStyles.displaySm.bold }>
                                    Check your mail
                                </Typography>
                                <Typography
                                    textAlign="center"
                                    fontSize={ TextStyles.textMd.normal }
                                    mb={ 0 }
                                    paragraph
                                >
                                    We sent a password reset link
                                </Typography>
                                <Typography fontSize={ TextStyles.textMd.normal }>
                                    { form.email }
                                </Typography>
                            </>
                        ) : (
                            <>
                                <Typography textAlign="center" mb={ 1 } color={ ColorStyles.gray[ 900 ] } fontSize={ TextStyles.displaySm.bold }>
                                    { "Forget password?" }
                                </Typography>
                                <Typography textAlign="center" mb={ 6 } fontSize={ TextStyles.textMd.normal }>
                                    { "Don’t worrry, we’ll send you reset instructions." }
                                </Typography>
                            </>
                        ) }
                    </Box>

                    { result ? (
                        <>
                            <Box my={ 4 }>
                                <Button
                                    type="button"
                                    fullWidth
                                    variant="primary"
                                    onClick={ openMailApp }
                                >
                                    Open mail app
                                </Button>
                            </Box>

                            <Stack
                                spacing={ 0.5 }
                                direction="row"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                mb={ 3.2 }
                            >
                                <Typography variant="label1" textAlign="center">
                                    { "Didn’t receive the email? " }
                                </Typography>
                                <Typography
                                    sx={ { cursor: "pointer" } }
                                    onClick={ () => setResult( false ) }
                                    fontSize={ TextStyles.textSm.medium }
                                    color={ ColorStyles.primary[ 700 ] }
                                >
                                    Resend the link
                                </Typography>
                            </Stack>
                        </>
                    ) : (
                        <Box component="form" onSubmit={ handleSubmit } noValidate mt={ 4 }>
                            <input
                                name="csrfToken"
                                type="hidden"
                                defaultValue={ csrfToken }
                            />
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

                            <Box mb={ 4 }>
                                <Button
                                    type="submit"
                                    fullWidth
                                    // disabled={ !valid }
                                    variant="primary"

                                >
                                    Reset password
                                </Button>
                            </Box>
                        </Box>
                    ) }

                    <Stack
                        spacing={ 0.5 }
                        direction="row"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <ArrowLeft width={ "20px" } height={ "20px" } />
                        <Link href="/login" passHref >
                            <Typography fontSize={ TextStyles.textSm.medium } paragraph>
                                Back to login
                            </Typography>
                        </Link>
                    </Stack>
                </Grid>
            </Grid>
        </Container>

    );
}

ForgotPassword.layout = "Front";