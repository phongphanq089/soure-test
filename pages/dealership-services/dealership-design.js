import { Box, Grid, Container } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import BannerSocialMarketing from '../../src/components/LayoutSocial-Marketing/Banner-socialMarketing';
import PricingPlan from '../../src/components/LayoutSocial-Marketing/PricingPlan/PricingPlan';

const DealershipDesign = () => {
    return (
        <Grid container spacing={ 0 }>
            <Grid container spacing={ 2 }>
                <Grid item xs={ 12 } lg={ 12 } position="relative" >
                    <Box sx={ {
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        right: 0,
                        zIndex: 2,
                        backgroundColor: "#000",
                        opacity: "0.6"

                    } } ></Box>
                    <Box
                        sx={ {
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            right: 0,
                            zIndex: 1,

                        } }
                    >
                        <Container>
                            <Image src="/dealership-webdesign.jpg" alt=''
                                layout='fill'
                                objectFit="cover"
                            />
                        </Container>

                    </Box>
                    {/* bannner */ }
                    <BannerSocialMarketing />
                </Grid>

            </Grid>
            <Grid container spacing={ 0 }>
                <Grid item xs={ 12 } md={ 12 }>
                    <PricingPlan />
                </Grid>
            </Grid>
        </Grid>

    );
};


DealershipDesign.layout = "Front";
export default DealershipDesign;