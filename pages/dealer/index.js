import Mydetails from '@elements/dealer/content/Mydetails';
import Password from '@elements/dealer/content/Password';
import Profile from '@elements/dealer/content/Profile';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab, Typography } from '@mui/material';
import { ColorStyles, TextStyles } from '@theme/Designs';
import { getSession, useSession } from 'next-auth/react';
import { useState } from 'react';

export const getServerSideProps = async ( context ) => {
  const session = await getSession( context );
  if ( !session )
    return {
      redirect: {
        destination: '/login',
      },
    };
  return {
    props: { session },
  };
};
const Dealer = () => {
  const [ value, setValue ] = useState( '1' );

  const handleChange = ( event, newValue ) => {
    setValue( newValue );
  };
  const { data: session, status } = useSession();
  if ( status === 'loading' ) {
    return <div>Loading...</div>;
  }
  if ( status === 'unauthenticated' ) {
    return <div> ban chua dang nhap</div>;
  }
  return (
    <Box sx={ {
      padding: {
        xs: "0px",
        md: "32px"
      }
    } }>
      <Typography
        fontSize={ TextStyles.displaySm.medium }
        color={ ColorStyles.gray[ 900 ] }
      >
        Settings
      </Typography>
      <Box mt={ 2.4 }>
        <Box sx={ { width: '100%' } }>
          <TabContext value={ value }>
            <Box
              sx={ {
                borderColor: 'divider',
                borderBottom: `1px solid ${ ColorStyles.gray[ 200 ] } `,
              } }
              mb={ 3 }
            >
              <TabList
                onChange={ handleChange }
               
              >
                <Tab label='My details' value='1' />
                <Tab label='Profile' value='2' />
                <Tab label='Password' value='3' />
              </TabList>
            </Box>
            <TabPanel value='1' sx={ {
              ".MuiTabPanel-root": {
                  padding : "0px !important"
              }
            }}>
              <Mydetails />
            </TabPanel>
            <TabPanel value='2'>
              <Profile />
            </TabPanel>
            <TabPanel value='3'>
              <Password />
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Box>
  );
};
Dealer.layout = 'dealer';
export default Dealer;
