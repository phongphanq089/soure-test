import { Button, IconButton, Popover, Stack } from '@mui/material';
import { ColorStyles } from '@theme/Designs';
import { Edit, Maximize2, Settings, Trash2 } from 'feather-icons-react/build/IconComponents';
import { useState } from 'react';

const Setting = () => {
    const [ anchorEl, setAnchorEl ] = useState( null );

    const handleClick = ( event ) => {
        setAnchorEl( event.currentTarget );
    };

    const handleClose = () => {
        setAnchorEl( null );
    };

    const open = Boolean( anchorEl );

    return (
        <>
            <Button
                variant="btn-shopcart-1"
                onClick={ handleClick }
                sx={ {
                    width: 25,
                    height: 25,
                    borderRadius: "50%",
                    minWidth: "unset",
                    padding: "unset",
                    zIndex: 999,
                } }
            >
                <Settings size={ 15 } color={ ColorStyles.success[ 900 ] } />
            </Button>
            <Popover
                open={ open }
                anchorEl={ anchorEl }
                onClose={ handleClose }
                anchorOrigin={ { vertical: 'top', horizontal: 'center' } }
                transformOrigin={ { vertical: 'bottom', horizontal: 'center' } }
            >
                <Stack direction="row" spacing={ 2 } sx={ { backgroundColor: ColorStyles.gray[ 200 ] } }>
                    <IconButton><Edit size={ 20 } /></IconButton >
                    <IconButton ><Trash2 size={ 20 } /></IconButton>
                    <IconButton ><Maximize2 size={ 20 } /></IconButton>
                </Stack>
            </Popover>
        </>
    );
};

export default Setting;