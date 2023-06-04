/* eslint-disable react-hooks/exhaustive-deps */
import ButtonAction from "@components/ButtonAction";
import CarEditor from "@components/CartInput/CarEditor";
import { CarInputFile } from "@components/CartInput/CarInputFile";
import { Box, FormControl, Grid, Stack, Typography } from '@mui/material';
import { Markup } from 'interweave';
import Image from "next/image";

function Banner( props ) {

    const { isLogin, isDownSm, data: { title, description, image } } = props;

    return (
        <Grid container spacing={ 0 } py={ 8 }>
            <Grid item xs={ 12 } md={ 5 } >
                <Stack direction="column" spacing={ 2 } alignItems="start">
                    <Typography sx={ { display: 'inline-block' } } variant='banner'>
                        { !isLogin ? <Markup tagName="div" content={ title } /> :
                            <CarEditor value={ title } field='homepage.banner.title' /> }
                    </Typography>
                    <Typography variant="description1" >
                        { !isLogin ? description : <CarEditor value={ description } field='homepage.banner.description' /> }
                    </Typography>
                    <ButtonAction variant='primary-2' href="#">Schedule a Live Demo</ButtonAction>
                </Stack>
            </Grid>
            <Grid item xs={ 12 } md={ 7 } textAlign="right" >
                { !isDownSm && !isLogin && <Box className="banner-home">
                    <Image src="/image/banner.png" width={ 699 } height={ 618 } alt="Banner" />
                </Box> }
                { !isDownSm && isLogin &&
                    <FormControl fullWidth >
                        <CarInputFile name="bannerHome" image="/image/banner.png" />
                    </FormControl> }
            </Grid>
        </Grid >
    );
}

export default Banner;
