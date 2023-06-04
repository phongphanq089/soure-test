import { Button, Collapse, List, ListItemButton, Typography } from '@mui/material';
import { ColorStyles } from '@theme/Designs';
import { ChevronDown, ChevronRight } from 'feather-icons-react';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import Link from 'next/link';
import { useState } from 'react';

const NabarMobile = ( { menu, menuItems, logined } ) => {
    //Menu Item isn't require login
    const [ open, setOpen ] = useState( false );
    const handleClick = () => {
        setOpen( !open );
    };

    //Menu Item is require login
    if ( ( menu.isLogin !== undefined && menu.isLogin === true && logined === false ) ||
        ( menu.isLogin !== undefined && menu.isLogin === false && logined === true ) )
        return '';

    return (
        <List sx={ { width: '100%', maxWidth: "100%" } } component="nav">
            <ListItemButton onClick={ handleClick }>
                <Typography variant='h4'>
                    { menu.title } { menu.isLogin }
                </Typography>
                { open ? <ChevronDown size={ 27 } /> : <ChevronRight size={ 27 } /> }
            </ListItemButton>
            <Collapse in={ open } timeout="auto" unmountOnExit>
                <List component="div" disablePadding >
                    {
                        menuItems && menuItems.length > 0 && menuItems.map( ( item, index ) => {
                            const minWidth = item.icon === undefined ? 0 : '40px';
                            return (
                                <ListItemButton key={ index }>
                                    <Button
                                        sx={ {
                                            color: ( theme ) => theme.palette.primary.main,
                                            justifyContent: 'start',
                                            minWidth: minWidth,
                                        } }
                                    >
                                        { item.icon !== undefined ? <FeatherIcon icon={ item.icon } width='18' height='18' /> : '' }
                                    </Button>
                                    <Link href={ item.href } passHref>
                                        <Typography variant='h4' color={ ColorStyles.gray[ 500 ] }
                                            sx={ {
                                                '&:hover': {
                                                    color: "#0d9488",
                                                }
                                            } }
                                        >
                                            { item.title }
                                        </Typography>
                                    </Link>
                                </ListItemButton>
                            );
                        } )
                    }
                </List>
            </Collapse>
        </List>
    );
};

export default NabarMobile;