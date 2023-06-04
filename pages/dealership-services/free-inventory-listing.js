import { Box, Container, Grid } from "@mui/material";
import { useSession } from "next-auth/react";
import Image from 'next/image';
import BanneSocialMarketing from '../../src/components/LayoutSocial-Marketing/Banner-socialMarketing';
import ContentService from '../../src/components/LayoutSocial-Marketing/ContentService';
import HeaderService from '../../src/components/LayoutSocial-Marketing/HeaderService';
import PricingPlan from '../../src/components/LayoutSocial-Marketing/PricingPlan/PricingPlan';
import { ListSocial, MaintainList, ManagermentList } from '../../src/components/LayoutSocial-Marketing/dataSocialMarketing';


export default function Freeinventory() {

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
                            <Image src={ "/banner-free.jpg" } alt='' fill className="Image_banner" />
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
                            header="FREE Inventory Listing"
                            description={ "Need a simple webpage to have your car inventory listed and attract new online customers or reach for larger social impact? We got you covered via our <span>FREE</span> inventory listing program with" }
                        />
                        <ContentService
                            icon="/socialMedialPage/Email.svg"
                            image="/socialMedialPage/image1.jpg"
                            header="Create Facebook/ Google"
                            description="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
                            item={ ListSocial }
                            reverse='inherit'
                        />
                        <ContentService
                            icon="/socialMedialPage/maintain-icon.svg"
                            image="/socialMedialPage/maintai.jpg"
                            header="Maintain interaction"
                            description="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
                            item={ MaintainList }
                            reverse='row-reverse'
                        />
                        <ContentService
                            icon="/socialMedialPage/managerment-icon.svg"
                            image="/socialMedialPage/managerment.jpg"
                            header="Manage your team with reports"
                            description="Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
                            item={ ManagermentList }
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
Freeinventory.layout = "Front"

