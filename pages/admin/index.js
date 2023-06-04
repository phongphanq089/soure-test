import { Alert, AlertTitle, Box, CircularProgress, Stack } from "@mui/material";
import { ColorStyles } from "@theme/Designs";
import { getSession, useSession } from "next-auth/react";
import Image from "next/image";

export const getServerSideProps = async ( context ) => {
    const session = await getSession( context );

    if ( !session || session.user.role.slug !== "admin" )
        return {
            redirect: {
                destination: "/"
            },
        };
    return {
        props: {
            session,
            titlePage: "admin",
        }
    };
};

const Admin = () => {

    const { data: session, status } = useSession();

    if ( status === 'loading' ) {
        return <CircularProgress />;
    }

    if ( status === "unauthenticated" ) {
        return <Stack direction="row" justifyContent="center" alignItems="center" >
            <Alert
                sx={ { bgcolor: ColorStyles.Foundation.Danger[ 300 ] } }
                severity="error">
                <AlertTitle>You are not logged in</AlertTitle>
            </Alert>
        </Stack>;
    }

    return (
        <Stack direction="column" justifyContent="center" alignContent="center">
            <Box margin="auto" py={ 10 } className="page-admin" >
                <Box width={ 700 } height={ 500 } className="page-admin-image">
                    <Image src="/admin.svg" alt="admin" width={ 500 } height={ 500 } />
                </Box>
            </Box>
        </Stack>
    );
};

export default Admin;
