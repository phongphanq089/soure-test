import { Avatar, Box, Button, Container, FormControl, Grid, Stack, Typography } from '@mui/material';

import { getCsrfToken } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, CheckCircle, Key } from 'react-feather';
import { CarInput } from '../../src/components/CartInput/CartInput';
import axiosClient from '../../src/configs/axios';
import useForm from '../../src/hooks/useForm';
import { ColorStyles, TextStyles } from '../../src/theme/Designs';

export async function getServerSideProps( context ) {
    const { code } = context.query;
    // Check Active Code Exist
    const checkCode = await axiosClient.get( "@/consumer/check-active-code", {
        params: {
            active_code: code,
        },
    } );
    if ( checkCode.status === false ) {
        return {
            redirect: {
                permanent: false,
                destination: "/reset-password",
            },
        };
    }
    const csrfToken = await getCsrfToken( context );
    return {
        props: {
            // code: code.toString(),
            csrfToken,
            titlePage: "Reset Password",
        },
    };
}

export default function NewpassWord( { code, csrfToken } ) {

    console.log( code );
    const [ result, setResult ] = useState( false );
    const { formRef, valid, setValid, form, handleChange, hanldeBlur } = useForm(
        {
            password: "",
            confirm_password: "",
        },
        {
            password: true,
            confirm_password: true,
        }
    );

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        // check errors
        const error = e.target.querySelector( ".Mui-error" );
        if ( error ) {
            setValid( false );
            return;
        }
        const data = new FormData( e.currentTarget );
        const reset = await axiosClient.post( "@/consumer/reset-password", data );
        setResult( reset );
        console.log( reset );
    };

    return (
        <Container maxWidth="lg">
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                my={ 9 }
                minHeight={ 300 }
            >
                <Grid item xs={ 12 } sm={ 6 } md={ 4 }>
                    <Box textAlign={ "center" }>
                        <Box mb={ 4 }>
                            <Avatar className="outside" sx={ { margin: "auto", width: "56px", height: "56px" } }>
                                <Avatar className="inside"
                                    sx={ {
                                        backgroundColor: "#D3F8DF",
                                        outline: "none", width: "100%",
                                        height: "100%", border: "10px solid",
                                    } }
                                >
                                    { result ? (
                                        <CheckCircle color="#099250" />
                                    ) : (
                                        <Key color="#099250" />
                                    )
                                    }
                                </Avatar>
                            </Avatar>
                        </Box>
                        <Typography color={ ColorStyles.gray[ 900 ] } fontSize={ TextStyles.displaySm.bold } >
                            { "Set new password" }
                        </Typography>
                        <Typography mt={ 1 } fontSize={ TextStyles.textMd.normal } >
                            { result ? "Your password has been successfully reset. Click below to log in magically." : "Your new password must be different to previously used passwords." }
                        </Typography>
                    </Box>
                    { result ? (
                        <Box my={ 4 }>
                            <Link href="/login" passHref>
                                <Button type="button" fullWidth variant="primary" sx={ { height: "40px" } }>
                                    { "Continue" }
                                </Button>
                            </Link>
                        </Box>
                    ) : (
                        <Box component="form" onSubmit={ handleSubmit } noValidate mt={ 3 }>
                            <input
                                name="csrfToken"
                                type="hidden"
                                defaultValue={ csrfToken }
                            />
                            <input name="active_code" type="hidden" defaultValue={ code } />
                            <FormControl fullWidth sx={ { mb: 3 } } required={ true }>
                                <CarInput
                                    label="New Password"
                                    placeholder="Your New Password"
                                    name="password"
                                    type="password"
                                    rules={ {
                                        empty: "Your New Password not empty.",
                                        minLength: {
                                            value: 8,
                                            msg: "Must be at least 8 characters.",
                                        },
                                    } }
                                    value={ form.password }
                                    onChange={ handleChange }
                                    onBlur={ hanldeBlur }
                                    note="This is a hint text to help user."
                                />
                            </FormControl>

                            <FormControl fullWidth sx={ { mb: 3 } } required={ true }>
                                <CarInput
                                    label="Confirm Password"
                                    placeholder="Your Confirm Password"
                                    name="confirm_password"
                                    type="password"
                                    rules={ {
                                        empty: "Your confirm password not empty.",
                                        compare: {
                                            value: form.password,
                                            msg: "Your confirm password not same password.",
                                        },
                                    } }
                                    value={ form.confirm_password }
                                    onChange={ handleChange }
                                    onBlur={ hanldeBlur }
                                />
                            </FormControl>
                            <Box mb={ 4 }>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="primary"
                                    sx={ { height: "40px" } }
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
NewpassWord.layout = "Front";
