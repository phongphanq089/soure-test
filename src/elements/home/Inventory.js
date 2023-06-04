import BlockItemPage from '@components/BkockItemPage';
import BlockTitle from '@components/BlockTitle';
import ButtonAction from '@components/ButtonAction';
import { Box, Grid } from '@mui/material';

function Inventory( { mdDown, inventory, isLogin, data: { title, description } } ) {

    return (
        <Grid container spacing={ 0 } py={ 8 } >
            <Grid item xs={ 12 } lg={ 12 }>
                <BlockTitle isLogin={ isLogin } title={ title } description={ description } />
            </Grid>
            <Grid item xs={ 12 } lg={ 12 }>
                <BlockItemPage data={ inventory } mdDown={ mdDown } isLogin={ isLogin } />
            </Grid>
            <Box margin="auto" >
                <ButtonAction >View Pricing</ButtonAction>
            </Box>
        </Grid>
    );
}

export default Inventory;
