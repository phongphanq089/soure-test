import {
	Avatar,
	Box,
	Button,
	Container,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { ArrowLeft, XCircle } from "react-feather";
import { ColorStyles, TextStyles } from "../../src/theme/Designs";

export async function getServerSideProps( context ) {
	return {
		props: {
			titlePage: "Reset Succecssfull",
		},
	};
}
export default function ErrorResetPassword() {
	return (
		<Container maxWidth="lg">
			<Grid
				container
				alignItems="center"
				justifyContent="center"
				my={ 12 }
				minHeight={ 500 }
			>
				<Grid item justifyContent="center" xs={ 12 } sm={ 6 } md={ 4 }>
					<Box textAlign="center" mb={ 3 }>
						<Box mb={ 4 }>
							<Avatar className="outside" sx={ { margin: "auto", width: "56px", height: "56px", backgroundColor: "#f87171", } }>
								<Avatar className="inside"
									sx={ { backgroundColor: "#f87171", } }
								>
									<XCircle color={ ColorStyles.error[ 600 ] } />
								</Avatar>
							</Avatar>
						</Box>
						<Typography textAlign="center" mb={ 1 } variant="h5">
							Password reset
						</Typography>
						<Typography textAlign="center" fontSize={ TextStyles.textMd.normal } >
							{ "Your password hasn't reset. Click below to forgot password." }
						</Typography>
					</Box>
					<Box mb={ 4 }>
						<Link href="/forgot-password" passHref>
							<Button type="submit" fullWidth variant="primary">
								Continue
							</Button>
						</Link>

						<Stack
							spacing={ 0.5 }
							direction="row"
							display="flex"
							justifyContent="center"
							alignItems="center"
							my={ 3 }
						>
							<ArrowLeft width={ "20px" } height={ "20px" } />
							<Link href="/login" passHref >
								<Typography fontSize={ TextStyles.textSm.medium } paragraph>
									Back to login
								</Typography>
							</Link>
						</Stack>
					</Box>
				</Grid>
			</Grid>
		</Container>

	);
};

ErrorResetPassword.layout = "Front";
