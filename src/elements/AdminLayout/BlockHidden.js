import Acctions from "@components/Admin/menus/Acctions";
import ModlalAddForm from "@components/Admin/menus/ModalAddForm";
import CartInputSelect from "@components/CartInput/CartInputSelect";
import ShopingCartIcon from "@components/ShopingCartIcon";
import { OPTIONS_SELECT } from "@configs/constants";
import { Collapse, Divider, IconButton, List, Stack, Typography } from "@mui/material";
import { ColorStyles } from "@theme/Designs";
import { MinusCircle, PlusCircle } from "feather-icons-react/build/IconComponents";
import { useState } from "react";

const BlockHidden = ( props ) => {
    const { title, children, isMenuType, } = props;

    const [ open, setOpen ] = useState( true );

    const handleClick = () => {
        setOpen( !open );
    };

    const [ openAdd, setOpenAdd ] = useState( false );

    const handleClickOpen = () => {
        setOpenAdd( true );
    };

    const handleClose = () => {
        setOpenAdd( false );
    };

    return (
        <List sx={ { width: '100%', bgcolor: ColorStyles.base.white, py: 3 } }>
            <Stack direction="row" justifyContent="space-between" alignItems="center" px={ 2 } >
                <Typography variant="title4">{ title }</Typography>
                { isMenuType && <>
                    <CartInputSelect sx={ { width: "50% !important" } } options={ OPTIONS_SELECT } defaultOption="Default" />
                    <Acctions handleAction={ handleClickOpen } > Add to menu </Acctions>
                </> }
                <Stack direction="row" alignItems="center" spacing={ 2 }>
                    <IconButton ><ShopingCartIcon icon="loading" /></IconButton>
                    <IconButton onClick={ handleClick }>
                        { open ? <MinusCircle size={ 25 } color={ ColorStyles.Foundation.YellowBrown[ 500 ] } /> :
                            <PlusCircle size={ 25 } color={ ColorStyles.Foundation.YellowBrown[ 500 ] } /> }
                    </IconButton>
                </Stack>
            </Stack>
            <Divider />
            {/* content block */ }
            <Collapse in={ open } timeout="auto" unmountOnExit>
                <List component="div" disablePadding> { children }</List>
            </Collapse>
            {/* model add form */ }
            <ModlalAddForm open={ openAdd } handleClose={ handleClose } />
        </List>
    );
};

export default BlockHidden;