import { Button } from '@mui/material';
import { Stack } from '@mui/system';
import { signOut } from 'next-auth/react';
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

const UserMobile = ( { user } ) => {
    const router = useRouter();
    const [ myAccount, setMyaccount ] = useState( "/" );

    useEffect( () => {
        if ( user.role.slug == "dealer" ) {
            setMyaccount( "/dealer" );
        } else {
            setMyaccount( "/admin" );
        }
    }, [ user ] );

    const handleSignOut = () => {
        signOut( {
            callbackUrl: "/login",
            redirect: false,
        } ).then( ( res ) => router.push( res.url ) );
    };

    return (
        <Stack direction="column-reverse" spacing={ 2 }>
            <Button fullWidth variant="primary" onClick={ handleSignOut }>
                Logout
            </Button>
            <Button fullWidth variant="contained" color="success" onClick={ () => router.push( myAccount ) }>
                WELLCOME TO { user.role.slug.toUpperCase() }
            </Button>
        </Stack>
    );
};

export default UserMobile;