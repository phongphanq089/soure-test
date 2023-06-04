import CarEditor from "@components/CartInput/CarEditor";
import { CarInputFile } from "@components/CartInput/CarInputFile";
import { FormControl, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const BooKingItemMobile = ( { data, isLogin } ) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Grid item xs={ 12 } lg={ 12 } mb={ 8 } className="booking">
            <Slider { ...settings }>
                { data !== undefined && data.map( ( item, index ) => (
                    <Grid item xs={ 12 } sm={ 12 } key={ index }>
                        <Stack
                            justifyContent={ 'center' } alignItems={ 'center' } textAlign={ 'center' }
                            spacing={ 4 }
                        >
                            { !isLogin ? <Image src={ item.image } alt='' width={ 320 } height={ 350 } /> :
                                <FormControl fullWidth sx={ { height: "100%" } } >
                                    <CarInputFile
                                        name="bannerHome"
                                        image={ item.image } />
                                </FormControl> }
                            { !isLogin ? item.description : <CarEditor value={ item.description } field='' /> }
                        </Stack>
                    </Grid> ) ) }
            </Slider>
        </Grid>
    );
};

const BooKingItem = ( props ) => {

    const { items, mdDown, isLogin } = props;

    const data = [
        {
            image: "https://dealershipone.com/_next/image?url=%2Fbooking%2Fbooking.png&w=384&q=75",
            description: items[ 0 ].description
        },
        {
            image: "https://dealershipone.com/_next/image?url=%2Fbooking%2FFrame%202.png&w=384&q=75",
            description: items[ 1 ].description
        },
        {
            image: "https://dealershipone.com/_next/image?url=%2Fbooking%2Fframe3.png&w=384&q=75",
            description: items[ 2 ].description
        },
    ];

    if ( mdDown === true ) return <BooKingItemMobile data={ data } isLogin={ isLogin } />;
    return (
        <Grid container spacing={ 3 } mb={ 8 } className="booking">
            { data !== undefined && data.map( ( item, index ) => (
                <Grid item md={ 4 } lg={ 4 } key={ index }>
                    <Stack
                        justifyContent={ 'center' } alignItems={ 'center' } textAlign={ 'center' }
                        spacing={ 4 }
                    >
                        { !isLogin ? <Image src={ item.image } alt='' width={ 320 } height={ 350 } /> :
                            <FormControl fullWidth sx={ { height: "100%" } } >
                                <CarInputFile
                                    name="bannerHome"
                                    image={ item.image } />
                            </FormControl> }
                        <Typography variant="description4">
                            { !isLogin ? item.description : <CarEditor value={ item.description } field='' /> }
                        </Typography>
                    </Stack>
                </Grid>
            ) )
            }
        </Grid>
    );

};

export default BooKingItem;