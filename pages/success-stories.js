import SuccessStoried from '@elements/home/SuccessStoried/SucsessStoried';
import { useSetting } from '@hooks/setting';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import BannerSocialMarketing from '../src/components/LayoutSocial-Marketing/Banner-socialMarketing';
import { ColorStyles } from '../src/theme/Designs';

const SuccessStories = () => {
    const session = useSession();
    const [ settings, getSetting, setSetting ] = useSetting( "homepage", null );
    const baseUrl = getSetting( 'system.baseUrl' );
    if ( settings === null ) return;
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
                        opacity: "0.6"

                    } } ></Box>
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
                            <Image src="/success-banner.jpg" alt='' fill className="Image_banner" />
                        </Container>
                    </Box>
                    <BannerSocialMarketing />
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

                        <Grid item xs={ 12 } md={ 12 } textAlign={ 'center' } >
                            <Typography variant='h2'
                                color={ ColorStyles.gray[ 900 ] }
                                mb={ 2.4 } >
                                Success Stories</Typography>
                            <Typography variant='subtitle3' mx='auto'  >
                                { "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" }
                            </Typography>
                        </Grid>
                        <Grid item xs={ 12 } md={ 12 } textAlign={ 'center' } >
                            <SuccessStoried data={ settings.stories } session={ session } />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>

    );
};

SuccessStories.layout = "Front";
export default SuccessStories;