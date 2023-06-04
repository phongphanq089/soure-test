import BlockTitle from '@components/BlockTitle';
import ButtonAction from '@components/ButtonAction';
import { Box, Grid } from '@mui/material';
import BooKingItem from './BooKingItem';


function Bookings( { mdDown, isLogin, data: { title, description, items } } ) {

    return (
        <Grid container spacing={ 0 } py={ 8 }  >
            <Grid item xs={ 12 } lg={ 12 }>
                <BlockTitle isLogin={ isLogin } variantTile="heading1" variantDesc="description2" title={ title } description={ description } />
            </Grid>
            <Grid item xs={ 12 } lg={ 12 }>
                <BooKingItem items={ items } mdDown={ mdDown } isLogin={ isLogin } />
            </Grid>
            <Box margin="auto">
                <ButtonAction>View Pricing</ButtonAction>
            </Box>
        </Grid>
    );
}

export default Bookings;
