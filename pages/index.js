import DealerShip from "@components/home/DealerShip";
import Video from "@components/home/Video";
import { directBuyCustomer, inventory, socialMedialItem, successStoried } from "@data/homePageItem";
import Banner from "@elements/home/Banner";
import BlockContent from "@elements/home/BlockContent";
import ContactUs from "@elements/home/Contact";
import Bookings from "@elements/home/CustomerBooking/Bookings";
import DirectBuyCustomer from "@elements/home/DirectBuyCustomer";
import Inventory from "@elements/home/Inventory";
import SocialMedia from "@elements/home/SocialMedia";
import SuccessStoried from "@elements/home/SuccessStoried/SucsessStoried";
import { useSetting } from '@hooks/setting';
import { Box, Container, useMediaQuery } from "@mui/material";
import { getSession } from "next-auth/react";

export const getServerSideProps = async ( context ) => {
    const session = await getSession( context );

    return {
        props: {
            session,
        }
    };
};

export default function Index( { session } ) {

    const isLogin = Boolean( session );

    const isDownSm = useMediaQuery( ( theme ) => theme.breakpoints.down( 'sm' ) );

    const mdDown = useMediaQuery( ( theme ) => theme.breakpoints.down( 'md' ) );

    const [ settings, getSetting, setSetting ] = useSetting( "homepage", null );

    const baseUrl = getSetting( 'system.baseUrl' );

    if ( settings === null ) return;

    console.log( settings );
    return (
        <Box>
            <Container>
                <Banner isLogin={ isLogin } data={ settings.banner } isDownSm={ isDownSm } />
            </Container>

            <Container>
                <Video isLogin={ isLogin } data={ settings.video[ 0 ] }
                    field='homepage.video.0'
                    reverse='inherit'
                    url={ "https://dealershipone.com/video1.mp4" }
                    description="With the exponential growth of traditional auto listing websites such as Carguru, together with the births of new customer facing auto trading platforms such as Carmax & Carvana, studies found that customers now more likely make a car buying decision entirely through their..."
                    title_popup="Social Media Marketing"
                    desc_popup="See how we can help you <span>increase customer's</span>base with a custom dealership's  <span>Social Media Marketing</span> strategy"
                    content_popup1="With the exponential growth of traditional auto listing websites such as Carguru, together with the births of new customer facing auto trading platforms such as Carmax & Carvana, studies found that customers now more likely make a car buying decision entirely through their computer's screens"
                    content_popup2="Don't be left out of the race. Start making a positive impact to your dealership (and sales!) today by well maintaining your social media's presence (on Facebook, Google, etc.) and increasing your social reach not only to acquire new customers but also to maintain good relationships with would-be returning ones"
                />
            </Container>

            <BlockContent>
                <SocialMedia data={ settings.socialMedia } mdDown={ mdDown } isLogin={ isLogin } socialMedialItem={ socialMedialItem } />
            </BlockContent>

            <Container>
                <Video isLogin={ isLogin } data={ settings.video[ 0 ] }
                    field='homepage.video.1'
                    reverse='row-reverse'
                    url={ "https://dealershipone.com/video.mp4" }
                    description="“Do you know what giants like Carmax/ Carvana get ahead of you? Capital? Yes, but not really a kill. Technology? Yes! Specifically: the ability to buy back directly from yourcustomers! Imagine if today your customer could submit their car's images and details for a quick quote from..."
                    title_popup="Direct Buy from Customer"
                    desc_popup="See how we can help you get ahead of your local competitors and giants by <span>lowering your dealership's inventory cost</span> with <span>Direct Buy from Customers</span> program <span> here</span></p>"
                    content_popup1="Do you know what giants like Carmax/ Carvanaget ahead of you? Capital? Yes, but not really a kill. Technology? Yes! Specifically: <span>the ability to buy back directly from your customers!</span>Imagine if today your customer could submit their car's images and details for a quick quotefrom your dealership (with a potential of a nice trade-in) and close the deal immediately, they wouldn'thave done that on your competitor's websites."
                    content_popup2="Surprisingly, you could have something like that (and immediately!) by implementing our<span> Direct Buy from Customers</span> page/ program to your own website. (Or even if you don’t have a website yet, why not let us help create one!). We'll help you get customer's cars directly through the web, negotiate, and buy direct!"
                />
            </Container>

            <BlockContent>
                <DirectBuyCustomer data={ settings.directBy } isLogin={ isLogin } mdDown={ mdDown } directBuyCustomer={ directBuyCustomer } />
            </BlockContent>

            <Container>
                <Bookings mdDown={ mdDown } data={ settings.bookings } isLogin={ isLogin } />
            </Container>

            <BlockContent>
                <Inventory mdDown={ mdDown } data={ settings.inventory } inventory={ inventory } isLogin={ isLogin } />
            </BlockContent>

            <Container>
                <DealerShip data={ settings.webdesign } isLogin={ isLogin } />
            </Container>

            <BlockContent>
                <SuccessStoried mdDown={ mdDown } data={ settings.stories } successStoried={ successStoried } isLogin={ isLogin } />
            </BlockContent>

            <Container>
                <ContactUs mdDown={ mdDown } data={ settings.contactus } isLogin={ isLogin } />
            </Container>
        </Box>
    );
}

Index.layout = "Front";