import CarEditor from '@components/CartInput/CarEditor';
import ShopingCartIcon from '@components/ShopingCartIcon';
import { Box, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";



const BlockItemMobile = ( { data, isLogin } ) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Grid item xs={ 12 } lg={ 12 } className="BlockItemStoried">
            <Slider { ...settings }>
                {/* <RenderHtml data={ data } isLogin={ isLogin } /> */ }
                { data !== undefined && data.map( ( item, index ) => (
                    <Grid item xs={ 12 } sm={ 4 } key={ index } sx={ { marginBottom: "80px" } } >
                        <Box className="BlockItemStoried-item">
                            { item.avatar &&
                                <Box className="BlockItemStoried-item-avatar" >
                                    <Image src={ item.avatar } alt='' width={ 120 } height={ 120 } />
                                </Box> }
                            <Stack pt={ 8 }
                                direction={ "column" }
                                justifyContent={ "flex-start" }
                                align-items={ "flex-start" }
                            >
                                <Typography variant="title4">
                                    { !isLogin ? item.name : <CarEditor value={ item.name } field='' /> }
                                </Typography>
                                <Typography variant="title5">
                                    { !isLogin ? item.country : <CarEditor value={ item.country } field='' /> }
                                </Typography>
                                <ShopingCartIcon icon="vector" />
                                <Typography variant="title4">
                                    { !isLogin ? item.description : <CarEditor value={ item.description } field='' /> }
                                </Typography>
                            </Stack>
                        </Box>
                    </Grid>
                ) ) }
            </Slider>
        </Grid>
    );
};

const BlockItemStoried = ( { data, isLogin, mdDown } ) => {

    if ( mdDown === true ) return <BlockItemMobile data={ data } isLogin={ isLogin } />;

    return (
        <Grid container item xs={ 12 } lg={ 12 } py={ 8 } className="BlockItemStoried">
            { data !== undefined && data.map( ( item, index ) => (
                <Grid item xs={ 12 } sm={ 4 } key={ index }   >
                    <Box className="BlockItemStoried-item">
                        { item.avatar &&
                            <Box className="BlockItemStoried-item-avatar" >
                                <Image src={ item.avatar } alt='' width={ 120 } height={ 120 } />
                            </Box> }
                        <Stack pt={ 8 }
                            direction={ "column" }
                            justifyContent={ "flex-start" }
                            align-items={ "flex-start" }
                        >
                            <Typography variant="title4">
                                { !isLogin ? item.name : <CarEditor value={ item.name } field='' /> }
                            </Typography>
                            <Typography variant="title5">
                                { !isLogin ? item.country : <CarEditor value={ item.country } field='' /> }
                            </Typography>
                            <ShopingCartIcon icon="vector" />
                            <Typography variant="title4">
                                { !isLogin ? item.description : <CarEditor value={ item.description } field='' /> }
                            </Typography>
                        </Stack>
                    </Box>
                </Grid>
            ) ) }
        </Grid>
    );
};

export default BlockItemStoried;