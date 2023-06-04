import {
  Box, Button,
  Divider, Menu, MenuItem, Typography
} from "@mui/material";
import FeatherIcon from "feather-icons-react";
import React from "react";


const MyDealership = () => {
  const [ anchorEl4, setAnchorEl4 ] = React.useState( null );

  const handleClick4 = ( event ) => {
    setAnchorEl4( event.currentTarget );
  };

  const handleClose4 = () => {
    setAnchorEl4( null );
  };
  return (
    <>
      <Button
        aria-label='menu'
        aria-controls='profile-menu'
        aria-haspopup='true'
        onClick={ handleClick4 }
        variant='secondary'
      >
        <Box display='flex' alignItems='center'>
          <Typography
            variant='h5'
            sx={ { ml: 1 } }
          >

            My Dealership
          </Typography>
          <FeatherIcon icon='chevron-down' width='20' height='20' />
        </Box>
      </Button>
      <Menu
        id='profile-menu'
        anchorEl={ anchorEl4 }
        keepMounted
        open={ Boolean( anchorEl4 ) }
        onClose={ handleClose4 }
        sx={ {
          '& .MuiMenu-paper': {
            width: '280px',
            right: 0,
            top: '70px !important',
          },
          '& .MuiList-padding': {
            p: '20px',
          },
        } }
      >
        <Box>
          <Box>
            <MenuItem sx={ { py: 1, px: 0 } }>
              <Box display='flex' alignItems='center'>
                <Button
                  sx={ {
                    color: ( theme ) => theme.palette.primary.main,
                    justifyContent: 'start',
                    boxShadow: 'none',
                    minWidth: '35px',
                  } }
                >
                  <FeatherIcon icon='log-in' width='18' height='18' />
                </Button>
                <Box sx={ { ml: 2 } }>
                  <Typography
                    color='textSecondary'
                    variant='h6'
                    fontWeight='400'
                  >
                    Login to Dashboard
                  </Typography>
                </Box>
              </Box>
            </MenuItem>
            <Divider style={ { marginTop: 0, marginBottom: 0 } } />

            <MenuItem sx={ { py: 1, px: 0 } }>
              <Box display='flex' alignItems='center'>
                <Button
                  sx={ {
                    color: ( theme ) => theme.palette.primary.main,
                    justifyContent: 'start',
                    boxShadow: 'none',
                    minWidth: '35px',
                  } }
                >
                  <FeatherIcon icon='home' width='18' height='18' />
                </Button>
                <Box
                  sx={ {
                    ml: 2,
                  } }
                >

                  <Typography
                    color='textSecondary'
                    variant='h6'
                    fontWeight='400'
                  >
                    My Dealership’s Storefront
                  </Typography>
                </Box>
              </Box>
            </MenuItem>
            <Divider
              style={ {
                marginTop: 0,
                marginBottom: 0,
              } }
            />
            <MenuItem sx={ { py: 1, px: 0 } }>
              <Box display='flex' alignItems='center'>
                <Button
                  sx={ {
                    color: ( theme ) => theme.palette.primary.main,
                    justifyContent: 'start',
                    boxShadow: 'none',
                    minWidth: '35px',
                  } }
                >
                  <FeatherIcon icon='user-plus' width='18' height='18' />
                </Button>
                <Box sx={ { ml: 2 } }>
                  <Typography variant='h6' fontWeight='400'>
                    Register a New Account
                  </Typography>
                </Box>
              </Box>
            </MenuItem>
          </Box>
        </Box>
      </Menu>
    </>
  );
};

export default MyDealership;
