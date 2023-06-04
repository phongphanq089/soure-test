import { Box, Container, Grid } from "@mui/material";
import { useSession } from "next-auth/react";
import Image from 'next/image';
import BanneSocialMarketing from '../../src/components/LayoutSocial-Marketing/Banner-socialMarketing';
import ContentService from '../../src/components/LayoutSocial-Marketing/ContentService';
import HeaderService from '../../src/components/LayoutSocial-Marketing/HeaderService';
import PricingPlan from '../../src/components/LayoutSocial-Marketing/PricingPlan/PricingPlan';
import { ManagermentList } from '../../src/components/LayoutSocial-Marketing/dataSocialMarketing';
import Video from '../../src/components/home/Video';
import { ColorStyles } from '../../src/theme/Designs';

export default function GroupManagerment() {

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
                            <Image src={ "/banner-social.png" } alt='' fill className="Image_banner" />
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
                            description={ "See how we can help you <span>increase customer's</span> base with a custom dealership's <span>Social Media Marketing</span> strategy" }
                        />
                        <ContentService
                            icon="/socialMedialPage/managerment-icon.svg"
                            image="/socialMedialPage/managerment.jpg"
                            header="Manage your team with reports"
                            description="Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
                            item={ ManagermentList }
                            reverse='inherit'
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={ 0 }>
                <Grid item xs={ 12 } md={ 12 } style={ { backgroundColor: ColorStyles.primary[ 900 ] } } position="relative">
                    <Box
                        position={ "absolute" }
                        bottom={ 0 }
                        left={ 0 }
                        zIndex={ 1 }
                    >
                        <Image src="/socialMedialPage/Line pattern-left.svg" alt="" width={ 400 } height={ 300 } />
                    </Box>
                    <Video
                        url="https://dealershipone.com/video.mp4"
                        description='“With the exponential growth of traditional auto listing websites such as Carguru, together with the births of new customer facing auto trading platforms such as Carmax & Carvana, studies found that customers now more likely make a car buying decision entirely through their...'
                        readmore='/'
                        reverse='inherit'
                        session={ session }
                        style={ ColorStyles.base.white }
                        backgroundColor="unset"
                        title_popup="Social Media Marketing"
                        desc_popup="See how we can help you <span>increase customer's</span>  base with a custom dealership's  <span>Social Media Marketing</span> strategy"
                        content_popup1="With the exponential growth of traditional auto listing websites such as Carguru, together with the births of new customer facing auto trading platforms such as Carmax & Carvana, studies found that customers now more likely make a car buying decision entirely through their computer's screens"
                        content_popup2="Don't be left out of the race. Start making a positive impact to your dealership (and sales!) today by well maintaining your social media's presence (on Facebook, Google, etc.) and increasing your social reach not only to acquire new customers but also to maintain good relationships with would-be returning ones"
                    />
                    <Box
                        position={ "absolute" }
                        top={ 0 }
                        right={ 0 }
                        zIndex={ 1 }
                    >
                        <Image src="/socialMedialPage/Line pattern-right.svg" alt="" width={ 350 } height={ 343 } />
                    </Box>
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
GroupManagerment.layout = "Front"

