import { Typography, Button, FormControl, OutlinedInput } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';

function FormContact() {
    const handleSubmit = ( event ) => {
        event.preventDefault();
        const data = new FormData( event.currentTarget );
        console.log( {
            email: data.get( "email" ),
            password: data.get( "password" ),
        } );
    };
    return (
        <>
            <Box
                component="form"
                onSubmit={ handleSubmit }
                noValidate
                sx={ { mt: 1 } }
            >
                <Box display="flex" justifyContent="space-between">
                    <FormControl sx={ { width: "45%", marginBottom: "24px" } }>
                        <Typography variant="label" mb="6px" paragraph>
                            First name
                        </Typography>
                        <OutlinedInput required={ true } placeholder="First name" />
                    </FormControl>
                    <FormControl sx={ { width: "45%", marginBottom: "24px" } }>
                        <Typography variant="label" mb="6px" paragraph>
                            Last name
                        </Typography>
                        <OutlinedInput required={ true } placeholder="Last name" />
                    </FormControl>
                </Box>

                <FormControl sx={ { width: "100%", marginBottom: "24px" } }>
                    <Typography variant="label" mb="6px" paragraph>
                        Email
                    </Typography>
                    <OutlinedInput required={ true } placeholder="you@gmail.com" />
                </FormControl>
                <FormControl sx={ { width: "100%", marginBottom: "24px" } }>
                    <Typography variant="label" mb="6px" paragraph>
                        Phone number
                    </Typography>
                    <OutlinedInput
                        required={ true }
                        placeholder="+1 (555) 000-0000"
                    />
                </FormControl>
                <FormControl sx={ { width: "100%", marginBottom: "24px" } }>
                    <Typography variant="label" mb="6px" paragraph>
                        Message
                    </Typography>
                    <OutlinedInput multiline={ true } minRows={ 3 } />
                </FormControl>
                <Button
                    type="submit"
                    fullWidth
                    variant="primary"
                    sx={ { marginBottom: "16px" } }
                >
                    Send message
                </Button>
            </Box>
        </>

    );

};

export default FormContact;