import BannerSocialMarketing from '@components/LayoutSocial-Marketing/Banner-socialMarketing';
import PricingPlan from '@components/LayoutSocial-Marketing/PricingPlan/PricingPlan';
import { Box, Container, Grid } from '@mui/material';
import Image from 'next/image';

const CustomerBooking = () => {
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
                        opacity: "0.5"

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
                            <Image src="/booking-banner.jpg" alt=''
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

CustomerBooking.layout = "Front";
export default CustomerBooking;