import styled from "@emotion/styled";
import {
    Avatar,
    Badge,
    Box,
    Button, Menu,
    MenuItem,
    Stack,
    Typography
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import shadows from "@theme/Shadows";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const StyledBadge = styled( Badge )( ( { theme } ) => ( {
    "& .MuiBadge-badge": {
        backgroundColor: "#44b700",
        color: "#44b700",
        boxShadow: `0 0 0 2px ${ theme.palette.background.paper }`,
        "&::after": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            animation: "ripple 1.2s infinite ease-in-out",
            border: "1px solid currentColor",
            content: '""',
        },
    },
    "@keyframes ripple": {
        "0%": {
            transform: "scale(.8)",
            opacity: 1,
        },
        "100%": {
            transform: "scale(2.4)",
            opacity: 0,
        },
    },
} ) );

const UserDestop = ( { user } ) => {
    const router = useRouter();
    const [ myAccount, setMyaccount ] = useState( "/" );
    const baseUrl = "https://beta.carhara.com/";
    useEffect( () => {
        if ( user.role.slug == "dealer" ) {
            setMyaccount( "/dealer" );
        } else {
            setMyaccount( "/admin" );
        }
    }, [ user ] );

    const [ anchorEl, setAnchorEl ] = useState( null );
    const open = Boolean( anchorEl );

    const handleClick = ( event ) => {
        setAnchorEl( event.currentTarget );
    };

    const handleClose = () => {
        setAnchorEl( null );
    };

    return (
        <>
            <Stack direction={ "row" } alignItems="center">
                <Button
                    id="demo-positioned-button"
                    aria-controls={ open ? "demo-positioned-menu" : undefined }
                    aria-haspopup="true"
                    aria-expanded={ open ? "true" : undefined }
                    onClick={ handleClick }
                >
                    { user.avatar !== null ? <Avatar alt="Remy Sharp" src={ baseUrl + user.avatar } /> : <Avatar sx={ { bgcolor: deepPurple[ 500 ] } } /> }
                </Button>
                <Box>
                    <Typography variant="h4">{ user.username }</Typography>
                </Box>
            </Stack>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={ anchorEl }
                open={ open }
                onClose={ handleClose }
                sx={ {
                    "& .MuiMenu-paper": {
                        width: "fit-content",
                        top: "73px !important",
                        boxShadow: shadows,
                    },
                } }
                anchorOrigin={ {
                    vertical: "bottom",
                    horizontal: "left",
                } }
                transformOrigin={ {
                    vertical: "top",
                    horizontal: "left",
                } }
            >
                <Box my={ 1 } mx={ 1 }>
                    <Box>
                        <MenuItem sx={ { pt: 1, pb: 1 } } onClick={ () => router.push( '/dealer' ) }  >
                            <Box display="flex" alignItems="center">
                                <Button
                                    sx={ {
                                        color: ( theme ) => theme.palette.primary.main,
                                        boxShadow: 'none',
                                        boxShadow: "none",
                                        minWidth: "35px",
                                        borderRadius: "10px",
                                    } }
                                >
                                    <FeatherIcon icon="database" width="20" height="20" />
                                </Button>
                                <Stack direction={ "column" } ml={ 2 }>
                                    <Typography variant="h6">
                                        My dashboard
                                    </Typography>
                                </Stack>
                            </Box>
                        </MenuItem>
                        <MenuItem sx={ { pt: 2, pb: 1 } }
                            onClick={ () => router.push( '/my-dealershipStore' ) }
                        >
                            <Box display="flex" alignItems="center">
                                <Button
                                    sx={ {
                                        color: ( theme ) => theme.palette.primary.main,
                                        boxShadow: 'none',
                                        boxShadow: "none",
                                        minWidth: "30px",
                                        borderRadius: "10px",
                                    } }
                                >
                                    <FeatherIcon icon="home" width="20" height="20" />
                                </Button>
                                <Box ml={ 2 }>
                                    <Typography variant="h6" >
                                        { "My Dealership's Store" }
                                    </Typography>
                                </Box>
                            </Box>
                        </MenuItem>
                    </Box>
                    <Button
                        sx={ {
                            mt: 2,
                            display: "block",
                            width: "100%",
                            px: 2
                        } }
                        variant="contained"
                        color="primary"
                        onClick={ () =>
                            signOut( {
                                callbackUrl: "/login",
                                redirect: false,
                            } ).then( ( res ) => router.push( res.url ) )
                        }
                    >
                        Logout
                    </Button>
                </Box>
            </Menu>
        </>
    );
};

export default UserDestop;
