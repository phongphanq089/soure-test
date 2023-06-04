import BanneSocialMarketing from '@components/LayoutSocial-Marketing/Banner-socialMarketing';
import ContentService from '@components/LayoutSocial-Marketing/ContentService';
import { ListSocial } from '@components/LayoutSocial-Marketing/dataSocialMarketing';
import HeaderService from '@components/LayoutSocial-Marketing/HeaderService';
import PricingPlan from '@components/LayoutSocial-Marketing/PricingPlan/PricingPlan';
import { Box, Container, Grid } from "@mui/material";
import bannerImg from "@public/banner-social.png";
import Image from 'next/image';


export default function ViewPricing() {
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

                    } } > </Box>
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
                            <Image src={ bannerImg } alt='' layout="fill"
                                objectFit="cover" />
                        </Container>

                    </Box>
                    {/* bannner */ }
                    <BanneSocialMarketing />
                </Grid>
            </Grid>
            <Grid container spacing={ 0 }>
                <Grid item xs={ 12 } md={ 12 }>
                    <Grid container spacing={ 0 } sx={ {
                        my: 9.6,
                        mx: 'auto',
                        px: 4,
                        maxWidth: ( theme ) => theme.breakpoints.values.lg
                    } }>
                        <HeaderService
                            header="Social Media Marketing"
                            description={ "See how we can help you <span>increase customer's</span> base with a custom dealership's <span> Social Media Marketing</span> strategy" }
                        //description={ <p>See how we can help you <span>increase customer’s</span> base with a custom dealership’s <span> Social Media Marketing</span> strategy</p> }
                        />
                        <ContentService
                            icon="/socialMedialPage/Email.svg"
                            image="/socialMedialPage/image1.jpg"
                            header="Create Facebook/ Google"
                            description="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
                            item={ ListSocial }
                            reverse='inherit'
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={ 0 }>
                <Grid item xs={ 12 } md={ 12 }>
                    <PricingPlan />
                </Grid>
            </Grid>
        </Grid>
    );
}
ViewPricing.layout = "Front"

