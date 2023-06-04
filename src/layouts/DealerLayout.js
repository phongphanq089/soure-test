import { MainWrapper, PageDealer } from '@components/Layouts';
import Sliderbar from '@elements/dealer/sliderbars/sliderbar';
import Footer from '@elements/Footer';
import Header from '@elements/Header';
import { Container, Grid, useMediaQuery } from '@mui/material';
import { ColorStyles } from '@theme/Designs';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

export const DealerLayout = ( { children } ) => {
  const IconMenu = 'align-justify';
  const [ isSidebarOpen, setSidebarOpen ] = useState( true );
  const [ isMobileSidebarOpen, setMobileSidebarOpen ] = useState( false );
  const session = useSession();
  const isMobile = useMediaQuery( ( theme ) => theme.breakpoints.down( 'md' ) );
  return (
    <MainWrapper>
      <Header
        sx={ {
          backgroundColor: ColorStyles.base.white,
          margin: '0 auto',
          left: 0,
        } }
        isMobile={ isMobile }
        session={ session }
        toggleSidebar={ () => setSidebarOpen( !isSidebarOpen ) }
        toggleMobileSidebar={ () => setMobileSidebarOpen( true ) }
        IconMenu={ IconMenu }
      />
      <PageDealer display='flex'>
        <Grid
          container
          spacing={ 0 }
          sx={ {
            my: 3,
            mx: 'auto',
            px: 4,
            maxWidth: ( theme ) => theme.breakpoints.values.lg,
          } }
        >
          <Grid item xs={ 12 } sm={ 12 } md={ 3 }>
            <Sliderbar
              isSidebarOpen={ isSidebarOpen }
              isMobileSidebarOpen={ isMobileSidebarOpen }
              onSidebarClose={ () => setMobileSidebarOpen( false ) }
            />
          </Grid>
          <Grid item xs={ 12 } sm={ 12 } md={ 9 }>
            <Container
              maxWidth={ false }
              sx={ {
                px: '0!important',
                backgroundColor: ColorStyles.base.white,
              } }
            >
              { children }
            </Container>
          </Grid>
        </Grid>
      </PageDealer>
      <Footer />
    </MainWrapper>
  );
};
 
