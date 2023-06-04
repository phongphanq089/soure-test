import { Box, Grid, Stack, Typography } from '@mui/material';
import { ColorStyles } from '@theme/Designs';
import { Monitor } from 'feather-icons-react';

const DeviceStatus = ({device,time, active,}) => {
  return (
      <>
          <Grid container className='boderBottom' py={ 3 }>
              <Grid item xs={ 12 } >
                  <Typography variant='text3' color={ ColorStyles.gray[ 900 ] }>Where you’re logged in</Typography>
                  <Typography variant='text1'>
                      We’ll alert you via olivia@untitled.com if there is any unusual activity on your account.
                  </Typography>
              </Grid>
          </Grid>
          <Grid container className='boderBottom' py={ 3 }>
              <Grid item xs={ 12 } >
                  <Stack direction={ "row" } spacing={ 3 }>
                      <Monitor size={ 24 } />
                      <Box>
                          <Stack direction={ "row" } spacing={ 2 } alignItems="center" >
                              <Typography variant='text5' >2018 Macbook Pro 15-inch</Typography>
                              <Stack direction={ "row" }
                                  spacing={ 1 } alignItems="center"
                                  backgroundColor={ ColorStyles.primary[ 100 ] }
                                  borderRadius={ "10px" } 
                                  px ={1}
                                  >
                                  <Box width={ 7 } height={ 7 } borderRadius={ "50%" } backgroundColor={ ColorStyles.primary[ 900 ] }></Box>
                                  <Typography color={ ColorStyles.primary[ 900 ] } variant="h6">Active now</Typography>
                              </Stack>
                          </Stack>
                          <Typography variant='text1'>Melbourne, Australia • 22 Jan at 10:40am</Typography>
                      </Box>
                  </Stack>
              </Grid>
          </Grid>
          <Grid container className='boderBottom' py={ 3 }>
              <Grid item xs={ 12 } >
                  <Stack direction={ "row" } spacing={ 3 }>
                      <Monitor size = {24} />
                      <Box>
                          <Stack direction={ "row" } spacing={ 2 } alignItems="center">
                              <Typography variant='text5'>2018 Macbook Pro 15-inch</Typography>
                          </Stack>
                          <Typography variant='text1'>Melbourne, Australia • 22 Jan at 4:20pm</Typography>
                      </Box>
                  </Stack>
              </Grid>
          </Grid>
      </>
  )
}
export default  DeviceStatus