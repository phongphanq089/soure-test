import BlockTitle from '@components/BlockTitle';
import ButtonAction from '@components/ButtonAction';
import CarEditor from '@components/CartInput/CarEditor';
import { CarInputFile } from '@components/CartInput/CarInputFile';
import styled from '@emotion/styled';
import { FormControl, Grid, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import Image from 'next/image';
import { ColorStyles, TextStyles } from "../../theme/Designs";

const Button_btn = styled( "div" )( ( { theme } ) => ( {
    [ theme.breakpoints.down( 'md' ) ]: {
        margin: "auto !important",
        paddingTop: "2rem"
    }
} ) );

function DealerShip( { isLogin, data: { title, description, image, link } } ) {

    return (
        <Grid container spacing={ 4 } my={ 8 }>

            <BlockTitle isLogin={ isLogin } variantTile="heading1" variantDesc="description2" title={ title } />

            <Grid item xs={ 12 } md={ 6 }>
                { !isLogin ? <Box className="banner-home">
                    <Image src="/image/dealership.png" alt="dealership.png" width={ 500 } height={ 453 } />
                </Box> :
                    <FormControl fullWidth sx={ { height: "100%" } } >
                        <CarInputFile image="/image/dealership.png" />
                    </FormControl> }
            </Grid>
            <Grid item xs={ 12 } md={ 6 }>
                <Stack direction="column" alignItems="flex-start" spacing={ 4 } >
                    <Typography variant="description" color={ ColorStyles.gray[ 900 ] } fontSize={ TextStyles.displayXs.normal }>
                        { !isLogin ? description : <CarEditor value={ description } field='DealerShipOne.Block_dealership_design_content' /> }
                    </Typography>
                    <ButtonAction href="dealership-services/dealership-design">
                        View Pricing
                    </ButtonAction>
                </Stack>
            </Grid>
        </Grid >
    );
}

export default DealerShip;
