import { createTheme, ThemeProvider, Container, CssBaseline, Typography, TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import React from 'react';

import Logo from '../../../public/BlackLogo.svg';
import { TextStyles } from "../../theme/Designs";
const theme = createTheme();
const FormLogin = () => {
	const handleSubmit = ( event ) => {
		event.preventDefault();
		const data = new FormData( event.currentTarget );
		console.log( {
			email: data.get( 'email' ),
			password: data.get( 'password' ),
		} );
	};
	return (
		<ThemeProvider theme={ theme }>
			<Container component="main" maxWidth="xs" >
				<CssBaseline />
				<Box
					sx={ {
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					} }
				>

					<Image src={ Logo } alt="" />
					<Typography variant='DM Sans' color={ '#101828' } fontSize={ TextStyles.displayXs.bold }> Leave information and will be consulted for free</Typography>
					<Box component="form" onSubmit={ handleSubmit } noValidate sx={ { mt: 3 } }>
						<TextField
							margin="normal"
							fullWidth
							id="Firt_name"
							name="firstName"
							placeholder="Firt name"
							size="small"
						/>
						<TextField
							margin="normal"
							fullWidth
							id="Last_name"
							name="lastName"
							placeholder="Last name"
							size="small"
						/>
						<TextField
							margin="normal"
							fullWidth
							id="Business_name"
							name="name"
							placeholder="please enter business name"
							size="small"
						/>
						<TextField
							margin="normal"
							fullWidth
							id="Email"
							name="email"
							autoComplete="email"
							placeholder="email"
							size="small"
						/>
						<TextField
							margin="normal"
							fullWidth
							id="Phone_number"
							name="number"
							placeholder="cell phon e number"
							size="small"
						/>

						<Button
							type="submit"
							fullWidth
							variant='contained'
							color="success"
							sx={ { mt: 3, mb: 2 } }
						>
							Sign In
						</Button>

					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default FormLogin;