import BlockTitle from '@components/BlockTitle';
import ButtonAction from '@components/ButtonAction';
import { Box, Grid } from '@mui/material';
import BlockItemStoried from './BlockItemStoried';

function SuccessStoried( { mdDown, successStoried, isLogin, data: { title, description, link } } ) {

    return (
        <Grid container spacing={ 0 } py={ 8 } >
            <Grid item xs={ 12 } lg={ 12 }>
                <BlockTitle isLogin={ isLogin } title={ title } description={ description } />
            </Grid>
            <BlockItemStoried data={ successStoried } isLogin={ isLogin } mdDown={ mdDown } />
            <Box margin="auto">
                <ButtonAction >View More</ButtonAction>
            </Box>
        </Grid >
    );
}

export default SuccessStoried;
