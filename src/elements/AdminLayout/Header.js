import { AppBar, Avatar, Box, Button, Divider, Drawer, IconButton, Input, ListItem, ListItemButton, ListItemIcon, Menu, Stack, Toolbar, Typography } from "@mui/material";
import { ColorStyles } from "@theme/Designs";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { AlignJustify, ChevronDown, Mail, Search, XCircle } from "feather-icons-react/build/IconComponents";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

// Dropdown Component
const listItem = [
    {
        icon: "dollar-sign",
        title: "My Profile",
        desc: "Account Settings",
        color: `${ ColorStyles.success[ 500 ] }`
    },
    {
        icon: "shield",
        title: "My Inbox",
        desc: "Messages & Emails",
        color: `${ ColorStyles.error[ 500 ] }`,
    }
];

const Header = ( { sx, toggleSidebar, position, isDownSm, session, isLogin } ) => {

    const [ showDrawer2, setShowDrawer2 ] = useState( false );

    const handleDrawerClose2 = () => {
        setShowDrawer2( false );
    };
    const router = useRouter();

    const [ anchorEl4, setAnchorEl4 ] = useState( null );

    const handleClick4 = ( event ) => {
        setAnchorEl4( event.currentTarget );
    };

    const handleClose4 = () => {
        setAnchorEl4( null );
    };

    return (
        <AppBar className="header-navbar-admin" sx={ sx } position={ position } elevation={ 1 } >
            <Toolbar sx={ { maxWidth: 'unset' } } >
                <IconButton onClick={ toggleSidebar } size="large" >
                    <AlignJustify size={ 25 } color={ ColorStyles.base.black } />
                </IconButton>
                {/*======== search header========== */ }
                <IconButton onClick={ () => setShowDrawer2( true ) } size="large" >
                    <Search size={ 25 } color={ ColorStyles.base.black } />
                </IconButton>
                <Drawer
                    anchor="top"
                    open={ showDrawer2 }
                    onClose={ () => setShowDrawer2( false ) }
                    sx={ { "& .MuiDrawer-paper": { padding: "15px 30px" } } }
                >
                    <Box display="flex" alignItems="center">
                        <Input placeholder="Search here" fullWidth />
                        <IconButton onClick={ handleDrawerClose2 } >
                            <XCircle size={ 25 } color={ ColorStyles.base.black } />
                        </IconButton>
                    </Box>
                </Drawer>
                <Box flexGrow={ 1 } />
                {/*======== profile=========== */ }
                <Button onClick={ handleClick4 } >
                    <Box display="flex" alignItems="center">
                        <Avatar sx={ { marginRight: 1 } }>A</Avatar>
                        { !isDownSm && <Stack direction="row" alignItems="center" spacing={ 1 } >
                            <Typography variant="body8">
                                Hi,😍😘
                            </Typography>
                            <Typography variant="body8"> { isLogin === 'authenticated' ? `${ session.user.firstName } ${ session.user.lastName }` : '' } </Typography>
                            <ChevronDown size={ 25 } color={ ColorStyles.base.black } />
                        </Stack> }
                    </Box>
                </Button>
                <Menu
                    anchorEl={ anchorEl4 }
                    keepMounted
                    open={ Boolean( anchorEl4 ) }
                    onClose={ handleClose4 }
                    className="menu-popper-admin"
                >
                    <Typography variant="title2">
                        User Profile
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={ 3 } py={ 3 } >
                        <Avatar >
                            KP
                        </Avatar>
                        <Stack direction="column">
                            <Stack direction="row" spacing={ 0.5 }>
                                <Typography variant="body1">{ session.user.username }</Typography>
                                <Typography variant="body1">{ session.user.phone }</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" spacing={ 0.5 }>
                                <Mail color={ ColorStyles.base.black } />
                                <Typography variant="body1">{ session.user.email }</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Divider />
                    { listItem.map( ( item, index ) => (
                        <Box key={ `list-item-setting-${ index }` }>
                            <ListItem disablePadding >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FeatherIcon icon={ item.icon } width="18" height="18" color={ item.color } />
                                    </ListItemIcon>
                                    <Stack direction="column">
                                        <Typography variant="body1">{ item.title }</Typography>
                                        <Typography variant="body1">{ item.desc }</Typography>
                                    </Stack>
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                        </Box>
                    ) ) }
                    <Button
                        onClick={ () =>
                            signOut( { callbackUrl: "/", redirect: false, } )
                                .then( ( res ) => router.push( res.url ) ) }
                    >
                        Log out
                    </Button>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
