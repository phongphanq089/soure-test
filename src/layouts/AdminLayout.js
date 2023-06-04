import { MainAdmin, WrapperAdmin } from "@components/Layouts";
import axiosClient from "@configs/axios";
import Footer from "@elements/AdminLayout/Footer";
import Header from "@elements/AdminLayout/Header";
import SliderMenu from "@elements/AdminLayout/SliderMenu";
import Loading from "@elements/Loading";
import { useSetting } from "@hooks/setting";
import { Box, useMediaQuery } from "@mui/material";
import { setOptions } from "@slices/setting";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const AdminLayout = ( { children } ) => {

    const isDownLg = useMediaQuery( ( theme ) => theme.breakpoints.down( 'lg' ) );

    const isDownSm = useMediaQuery( ( theme ) => theme.breakpoints.down( 'sm' ) );

    const isDesktop = useMediaQuery( ( theme ) => theme.breakpoints.up( 'lg' ) );

    const customizer = useSelector( ( state ) => state.customizer );

    const [ favicon, getSetting, setSetting ] = useSetting(
        'themeOption.favicon',
        '/favicon.svg',
        'url'
    );

    const [ isSidebarOpen, setSidebarOpen ] = useState( true );

    const loadingSite = getSetting( 'loading' );

    const dispatch = useDispatch();


    useEffect( () => {
        document.body.className = "_admin";
    }, [] );

    useEffect( () => {
        const settings = async () => {
            await axiosClient.get( '@/settings' ).then( ( res ) => {
                dispatch( setOptions( res.data ) );
            } );
        };
        if ( !loadingSite ) settings();
    }, [ dispatch, loadingSite ] );

    const { data: session, status } = useSession();
    if ( status !== 'authenticated' ) return '';

    if ( !loadingSite ) return <Loading loadSite={ true } />;

    return (
        <MainAdmin >
            <Header
                sx={ {
                    paddingLeft: isSidebarOpen && isDesktop ? "280px" : ""
                } }
                isSidebarOpen={ isSidebarOpen }
                toggleSidebar={ () => setSidebarOpen( !isSidebarOpen ) }
                isDownSm={ isDownSm }
                session={ session }
                isLogin={ status }
            />
            <SliderMenu
                isSidebarOpen={ isSidebarOpen }
                toggleSidebar={ () => setSidebarOpen( !isSidebarOpen ) }
                isDownLg={ isDownLg }
                customizer={ customizer }
            />
            <WrapperAdmin>
                <Box sx={ { paddingTop: "20px", minHeight: "calc(100vh - 50px)", paddingLeft: isSidebarOpen && isDesktop ? "270px" : "" } }>
                    { children }
                </Box>
            </WrapperAdmin>
            {/* <Customizer /> */ }
            <Footer />
        </MainAdmin>
    );
};
