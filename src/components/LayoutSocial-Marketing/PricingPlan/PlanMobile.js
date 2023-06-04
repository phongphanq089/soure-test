import React from 'react';
import styled from '@emotion/styled';
import { experimentalStyled, Grid, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import Image from 'next/image';
import { ColorStyles, TextStyles } from '../../../theme/Designs';
import ButtonPlan from '../ButtonPlan';
import { BasicPlan, Business_plan, Enterprise_plan } from '../dataSocialMarketing';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const PlanSlider = experimentalStyled( Slider )( ( { theme } ) => ( {
    ".slick-dots": {
        bottom: "-5rem",
        "li button:before, li button:focus:before ": {
            opacity: "1"
        },
        " li button:before": {
            color: "#ccc",
            opacity: "1",
            fontSize: "17px",
            lineHeight: "17px"
        },
        " li.slick-active button:before": {
            opacity: "1",
            color: "#a3e635",
            width: " 20px"
        },
    },
} ) );
const Content = styled.div`
 box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
 padding : 32px;
 max-width: 384px;
 height : fit-content;
 margin : auto;
 position : relative;
`;

const PlanMobile = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Grid item xs={ 12 } md={ 12 } >
            <PlanSlider { ...settings }>
                { BasicPlan.map( ( itemPlans, index ) => (
                    <Grid item xs={ 12 } md={ 4 } marginTop={ "96px" } key={ index }>
                        <Content >
                            <Stack
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                spacing={ 1 }
                                textAlign="center"
                            >
                                <Typography color={ ColorStyles.gray[ 900 ] } fontSize={ TextStyles.displayLg.bold } >{ itemPlans.Money }</Typography>
                                <Typography color={ ColorStyles.gray[ 900 ] } fontSize={ TextStyles.textXl.bold } >{ itemPlans.heading }</Typography>
                                <Typography fontSize={ TextStyles.textMd.normal } >{ itemPlans.descriptions }</Typography>
                            </Stack>
                            <Box margin={ "32px 0 40px 0" } >
                                { itemPlans.List_item.map( ( item, index ) => (
                                    <Stack key={ index }
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="center"
                                        spacing={ 1.2 }
                                        mb={ 1.6 }
                                    >
                                        <Image src={ item.icon } alt="icon" width={ 24 } height={ 24 } />
                                        <Typography fontSize={ TextStyles.textMd.normal } >{ item.item }</Typography>
                                    </Stack>
                                ) ) }
                            </Box>
                            <ButtonPlan>Get Started</ButtonPlan>
                        </Content>
                    </Grid>
                ) ) }
                { Business_plan.map( ( itemPlans, index ) => (
                    <Grid item xs={ 12 } md={ 12 } marginTop={ "96px" } key={ index }  >
                        <Content>
                            <Box
                                width={ "100%" }
                                height={ "44px" }
                                backgroundColor={ "#EDFCF2" }
                                position={ "absolute" }
                                top={ "-44px" }
                                left={ "0" }
                                textAlign={ "center" }
                            >
                                <Typography fontSize={ TextStyles.textSm.medium } color={ ColorStyles.primary[ 700 ] } lineHeight="44px">Most popular plan</Typography>
                            </Box>
                            <Stack
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                spacing={ 1 }
                                textAlign="center"
                            >
                                <Typography color={ ColorStyles.gray[ 900 ] } fontSize={ TextStyles.displayLg.bold } >{ itemPlans.Money }</Typography>
                                <Typography color={ ColorStyles.gray[ 900 ] } fontSize={ TextStyles.textXl.bold } >{ itemPlans.heading }</Typography>
                                <Typography fontSize={ TextStyles.textMd.normal } >{ itemPlans.descriptions }</Typography>
                            </Stack>
                            <Box margin={ "32px 0 40px 0" } >
                                { itemPlans.List_item.map( ( item, index ) => (
                                    <Stack key={ index }
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="center"
                                        spacing={ 1.2 }
                                        mb={ 1.6 }
                                    >
                                        <Image src={ item.icon } alt="icon" width={ 24 } height={ 24 } />
                                        <Typography fontSize={ TextStyles.textMd.normal } >{ item.item }</Typography>
                                    </Stack>
                                ) ) }
                            </Box>
                            <ButtonPlan>Get Started</ButtonPlan>
                        </Content>
                    </Grid>
                ) ) }
                { Enterprise_plan.map( ( itemPlans, index ) => (
                    <Grid item xs={ 12 } md={ 4 } marginTop={ "96px" } key={ index } >
                        <Content >
                            <Stack
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                spacing={ 1 }
                                textAlign="center"
                            >
                                <Typography color={ ColorStyles.gray[ 900 ] } fontSize={ TextStyles.displayLg.bold } >{ itemPlans.Money }</Typography>
                                <Typography color={ ColorStyles.gray[ 900 ] } fontSize={ TextStyles.textXl.bold } >{ itemPlans.heading }</Typography>
                                <Typography fontSize={ TextStyles.textMd.normal } >{ itemPlans.descriptions }</Typography>
                            </Stack>
                            <Box margin={ "32px 0 40px 0" } >
                                { itemPlans.List_item.map( ( item, index ) => (
                                    <Stack key={ index }
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="center"
                                        spacing={ 1.2 }
                                        mb={ 1.6 }
                                    >
                                        <Image src={ item.icon } alt="icon" width={ 24 } height={ 24 } />
                                        <Typography fontSize={ TextStyles.textMd.normal } >{ item.item }</Typography>
                                    </Stack>
                                ) ) }
                            </Box>
                            <ButtonPlan>Get Started</ButtonPlan>
                        </Content>
                    </Grid>
                ) ) }
            </PlanSlider>
        </Grid>
    );
};

export default PlanMobile;