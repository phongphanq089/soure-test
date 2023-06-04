import { MainWrapper, PageWrapper } from '@components/Layouts';
import axiosClient from '@configs/axios';
import Footer from '@elements/Footer';
import Header from '@elements/Header';
import Loading from '@elements/Loading';
import { useSetting } from '@hooks/setting';
import { Container, useMediaQuery } from '@mui/material';
import { setOptions } from '@slices/setting';
import { ColorStyles } from '@theme/Designs';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const FrontLayout = ( { children } ) => {
	const session = useSession();
	const isMobile = useMediaQuery( ( theme ) => theme.breakpoints.down( 'md' ) );
	const [ favicon, getSetting, setSetting ] = useSetting(
		"themeOption.favicon",
		"/favicon.svg",
		"url"
	);
	const loadingSite = getSetting( "loading" );
	const dispatch = useDispatch();
	useEffect( () => {
		const settings = async () => {
			await axiosClient.get( "@/settings" ).then( ( res ) => {
				dispatch( setOptions( res.data ) );
			} );
		};

		if ( !loadingSite ) settings();
	}, [ dispatch, loadingSite ] );

	if ( !loadingSite ) return <Loading loadSite={ true } />;

	return (
		<MainWrapper>
			<Header
				sx={ { backgroundColor: ColorStyles.base.white, margin: '0 auto', left: 0 } }
				isMobile={ isMobile }
				session={ session }
			/>
			<PageWrapper display="flex">
				<Container maxWidth={ false } sx={ { paddingTop: '20px', px: '0!important', backgroundColor: ColorStyles.base.white } }>
					{ children }
				</Container>
			</PageWrapper>
			<Footer />
		</MainWrapper>
	);
};