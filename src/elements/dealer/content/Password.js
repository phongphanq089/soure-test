import {
  Box,
  Button,
  FormControl,
  Grid,
  OutlinedInput,
  Stack,
  Typography
} from '@mui/material';
import { TextStyles } from '@theme/Designs';
import DeviceStatus from './Device-status';

const Password = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      password: data.get('password'),
    });
  };
  return (
    <Box>
      <Box py={3} className='boderBottom'>
        <Typography
         variant='text3'
        >
          Password
        </Typography>
        <Typography variant='text1'>
          Please enter your current password to change your password.
        </Typography>
      </Box>
      <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Grid container className='boderBottom' py={3}>
          <Grid item xs={12} sm={12} md={5}>
            <Typography
             variant='text5'
              mb='6px'
            >
              Current password
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <FormControl fullWidth>
              <OutlinedInput
                type='password'
                id='pwd-text'
                placeholder='Password'
                fullWidth
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container className='boderBottom' py={3}>
          <Grid item xs={12} sm={12} md={5}>
            <Typography
            variant='text5'
              mb='6px'
            >
              New password
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <FormControl fullWidth>
              <OutlinedInput type='password' id='pwd-text' fullWidth />
              <Typography fontSize={TextStyles.textSm.normal}>
                Your new password must be more than 8 characters.
              </Typography>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container className='boderBottom' py={3}>
          <Grid item xs={12} sm={12} md={4}>
            <Typography
              variant='text5'
              mb='6px'
            >
              Confirm new password
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <FormControl fullWidth>
              <OutlinedInput type='password' id='pwd-text' fullWidth />
            </FormControl>
          </Grid>
        </Grid>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent={'flex-end'}
          spacing={2}
          my={2}
        >
          <Button variant='outlined'>cancel</Button>
          <Button type='submit' variant='primary'>
            Update password
          </Button>
        </Stack>
        {/* ==========DeviceStatus======== */}
        <DeviceStatus />
      </Box>
    </Box>
  );
};

export default Password;
