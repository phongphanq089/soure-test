import menuLeftItem from '@configs/menu-left-admin';
import LogoIcon from '@elements/LogoIcon';
import { Box, Collapse, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import { ChevronDown, ChevronRight } from 'feather-icons-react/build/IconComponents';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const SliderMenu = ( {
    toggleSidebar,
    isSidebarOpen,
    isDownLg,
    customizer
} ) => {

    const [ open, setOpen ] = useState( true );

    const router = useRouter();

    const handleClick = ( index ) => {
        if ( open === index ) {
            setOpen( ( prevopen ) => !prevopen );
        } else {
            setOpen( index );
        }
    };

    return (
        <Drawer
            anchor="left"
            className="menu-left-admin"
            aria-label="settings"
            open={ isSidebarOpen }
            onClose={ toggleSidebar }
            variant={ isDownLg ? "temporary" : "persistent" }
        >
            <Box className="list-menu-left">

                { isSidebarOpen === true && isDownLg === true ?
                    <Box className="icon-click">
                        <IconButton onClick={ toggleSidebar } size="large" >
                            <FeatherIcon icon="chevron-left" />
                        </IconButton>
                    </Box> : "" }

                <Box marginLeft={ 3 } my={ 2 }><LogoIcon /></Box>
                <List>
                    { menuLeftItem.map( ( item, index ) => {
                        return (
                            <Box key={ item.title } className="list-menu-left-item">
                                <ListItem>
                                    <ListItemButton onClick={ () => handleClick( index ) }>
                                        <ListItemIcon><FeatherIcon icon={ item.icon } width="20" height="20" /></ListItemIcon>
                                        { item.href ?
                                            <Link href={ item.href }><ListItemText primary={ item.title } /></Link>
                                            :
                                            <ListItemText primary={ item.title } /> }

                                        <ListItemIcon>
                                            { item.children ?
                                                index === open ? <ChevronRight size={ 23 } /> : <ChevronDown size={ 23 } /> : ""
                                            }
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                                { item.children &&
                                    <Collapse in={ index === open } timeout="auto" unmountOnExit className="menu-children">
                                        <List>
                                            { item.children && item.children.map( ( child ) => {
                                                return (
                                                    <ListItem key={ child.title } className={ router.pathname == child.href ? "active-router" : "" }>
                                                        <Link href={ child.href } >
                                                            <ListItemButton onClick={ () => handleClick( index ) }>
                                                                <ListItemText primary={ child.title } />
                                                            </ListItemButton>
                                                        </Link>
                                                    </ListItem>
                                                );
                                            } ) }
                                        </List>
                                    </Collapse> }
                            </Box>
                        );
                    } ) }
                </List>
            </Box>
        </Drawer>
    );
};

export default SliderMenu;