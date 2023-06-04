import {
    Avatar,
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    InputAdornment,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';
import { ColorStyles } from '@theme/Designs';
import {
    AlignJustify,
    AlignLeft,
    Link2,
    Mail,
    MoreVertical
} from 'feather-icons-react/build/IconComponents';
import SelectNormal from './autoselected/SelectNormal';

const Profile = () => {
    const handleSubmit = ( event ) => {
        event.preventDefault();
        const data = new FormData( event.currentTarget );
        console.log( {
            email: data.get( 'email' ),
        } );
    };
    return (
        <Box>
            {/* ------------------------------------------- */ }
            {/*   Personal info*/ }
            {/* ------------------------------------------- */ }
            <Stack
                direction='row'
                alignItems='center'
                justifyContent='space-between'
                py={ 3 }
                className='boderBottom'
            >
                <Stack direction={"column"}>
                    <Typography
                        variant='text3'
                    >
                        Personal info
                    </Typography>
                    <Typography variant='text1'>
                        Update your photo and personal details here.
                    </Typography>
                </Stack>
                <Button>
                    <MoreVertical />
                </Button>
            </Stack>
            <Box component='form' onSubmit={ handleSubmit } noValidate sx={ { mt: 1 } }>
                {/* ------------------------------------------- */ }
                {/*    Username*/ }
                {/* ------------------------------------------- */ }
                <Grid container className='boderBottom' py={ 3 }>
                    <Grid item xs={ 12 } sm={ 12 } md={ 5 }>
                        <Typography
                          variant='text5'
                            mb='6px'
                        >
                            Username
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 } md={ 7 }>
                        <FormControl fullWidth>
                            <OutlinedInput
                                startAdornment={
                                    <Box
                                        borderRight={ `1px solid ${ ColorStyles.gray[ 300 ] }` }
                                        padding='10px 4px'
                                    >
                                        <Typography variant='text1'>
                                            untitledui.com/
                                        </Typography>
                                    </Box>
                                }
                                id='username-text'
                                defaultValue={ 'olivia' }
                                fullWidth
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                {/* ------------------------------------------- */ }
                {/* Website*/ }
                {/* ------------------------------------------- */ }
                <Grid container className='boderBottom' py={ 3 }>
                    <Grid item xs={ 12 } sm={ 12 } md={ 5 }>
                        <Typography
                            variant='text5'
                            mb='6px'
                        >
                            Website
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 } md={ 7 }>
                        <FormControl fullWidth>
                            <OutlinedInput
                                startAdornment={
                                    <Box
                                        borderRight={ `1px solid ${ ColorStyles.gray[ 300 ] }` }
                                        padding='10px 4px'
                                    >
                                        <Typography variant='text1'>
                                            http://
                                        </Typography>
                                    </Box>
                                }
                                id='username-text'
                                defaultValue={ 'www.untitledui.com' }
                                fullWidth
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                {/* ------------------------------------------- */ }
                {/*Your photo*/ }
                {/* ------------------------------------------- */ }
                <Grid container className='boderBottom'>
                    <Grid item xs={ 12 } sm={ 12 } md={ 5 }>
                        <Stack direction={"column"} py={ 2 }>
                            <Typography
                               variant='text5'
                            >
                                Your photo
                            </Typography>
                            <Typography variant='text1' mb='6px'>
                                This will be displayed on your profile.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 } md={ 7 }>
                        <Stack
                            direction='row'
                            alignItems='center'
                            justifyContent={ 'space-between' }
                            py={ 3 }
                        >
                            <Avatar
                                alt='Remy Sharp'
                                src='/avatar.jpg'
                                sx={ { width: 64, height: 64 } }
                            />
                            <Box>
                                <Button>
                                    <Typography variant='text4'>
                                        Deleted
                                    </Typography>
                                </Button>
                                <Button>
                                    <Typography
                                        variant='text4'
                                        color={ ColorStyles.primary[ 900 ] }
                                    >
                                        Update
                                    </Typography>
                                </Button>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
                {/* ------------------------------------------- */ }
                {/*Bio*/ }
                {/* ------------------------------------------- */ }
                <Grid container className='boderBottom' py={ 3 }>
                    <Grid item xs={ 12 } sm={ 12 } md={ 5 }>
                        <Stack direction={"column"}>
                            <Typography variant='text5'>Bio</Typography>
                            <Typography variant='text1' mb='6px'>
                                Write a short introduction.
                            </Typography>
                       </Stack>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 } md={ 7 }>
                        <Stack direction={ 'row' } alignItems={ 'center' } spacing={ 2 } mb={ 1 }>
                            <SelectNormal />
                            <Typography variant='h4' color={ ColorStyles.gray[ 400 ] }>
                                B
                            </Typography>
                            <Typography variant='h4' color={ ColorStyles.gray[ 400 ] }>
                                I
                            </Typography>
                            <Link2 color={ ColorStyles.gray[ 400 ] } />
                            <AlignJustify color={ ColorStyles.gray[ 400 ] } />
                            <AlignLeft color={ ColorStyles.gray[ 400 ] } />
                        </Stack>
                        <FormControl sx={ { width: '100%' } }>
                            <OutlinedInput
                                defaultValue={
                                    "I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design"
                                }
                                multiline={ true }
                                minRows={ 4 }
                            />
                            <Typography variant='text1' px={ 1 }>
                                275 characters lef
                            </Typography>
                        </FormControl>
                    </Grid>
                </Grid>
                {/* ------------------------------------------- */ }
                {/*Job title*/ }
                {/* ------------------------------------------- */ }
                <Grid container className='boderBottom' py={ 3 }>
                    <Grid item xs={ 12 } sm={ 12 } md={ 5 }>
                        <Typography
                            variant='text5'
                            mb='6px'
                        >
                            Job title
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 } md={ 7 }>
                        <FormControl fullWidth>
                            <OutlinedInput
                                id='username-text'
                                defaultValue={ 'Product Designer' }
                                fullWidth
                            />
                        </FormControl>
                        <FormGroup>
                            <FormControlLabel
                                control={ <Checkbox defaultChecked size='small' /> }
                                label='Show my job title in my profile'
                            />
                        </FormGroup>
                    </Grid>
                </Grid>
                {/* ------------------------------------------- */ }
                {/*Alternative contact email*/ }
                {/* ------------------------------------------- */ }
                <Grid container className='boderBottom' py={ 3 }>
                    <Grid item xs={ 12 } sm={ 12 } md={ 5 }>
                        <Stack direction={"column"} px={ 2 }>
                            <Typography variant='text5'>
                                Alternative contact email
                            </Typography>
                            <Typography variant='text1' mb='10px'>
                                Enter an alternative email if you’d like to be contacted via a
                                different email.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 } md={ 7 }>
                        <FormControl fullWidth>
                            <OutlinedInput
                                startAdornment={
                                    <InputAdornment position='start'>
                                        <Mail color={ ColorStyles.gray[ 400 ] } />
                                    </InputAdornment>
                                }
                                id='username-text'
                                placeholder='example@example.com'
                                fullWidth
                            />
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Profile;
