import { Box, Container, Grid } from "@mui/material";
import { useSession } from "next-auth/react";
import Image from 'next/image';
import BanneSocialMarketing from '../../src/components/LayoutSocial-Marketing/Banner-socialMarketing';
import ContentService from '../../src/components/LayoutSocial-Marketing/ContentService';
import HeaderService from '../../src/components/LayoutSocial-Marketing/HeaderService';
import PricingPlan from '../../src/components/LayoutSocial-Marketing/PricingPlan/PricingPlan';
import { ListSocial } from '../../src/components/LayoutSocial-Marketing/dataSocialMarketing';

export default function DirectBuycustomer() {

    const { data: session, status } = useSession();

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
                            <Image src={ "/banner-customer.jpg" } alt='' fill className="Image_banner" />
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
                            status={ status }
                            session={ session }
                            header="Direct Buy from Customer"
                            description={ "See how we can help you get ahead of your local competitors and giants by <span>lowering your dealership’s inventory cost</span> with <span>Direct Buy from Customers</span> program <span>here</span>" }
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
DirectBuycustomer.layout = "Front"

