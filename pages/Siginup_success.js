import { Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { ColorStyles, TextStyles } from '../src/theme/Designs';
import styled from '@emotion/styled';
import { Box, Stack } from '@mui/system';


const ButtonColor = styled.div`
  max-width : 364px;
  margin : auto;
   button {
    width : 100%;
    height  : 44px;
}
`;

export default function Siginup_success() {
    // const { data } = useSession();
    const router = useRouter();
    return (
        <Container maxWidth="lg">
            <Grid
                container
                textAlign="center"
                alignItems="center"
                justifyContent="center"
                spacing={ 4 }
                px={ 3 }
                my={ 9.8 }
                mb={ 16 }
            >
                <Grid item justifyContent="center" xs={ 12 } md={ 7 }>
                    <Image src="/siginup_success.jpg" alt="" width={ 440 } height={ 273 } />
                    <Typography my={ 2 } fontSize={ TextStyles.displaySm.bold } color={ ColorStyles.gray[ 900 ] } >
                        {/* { `Welcome, ${ data.user.full_name }` } */ }
                        Welcome, Olivia Rhie
                    </Typography>
                    <Typography fontSize={ TextStyles.textMd.normal } color={ ColorStyles.gray[ 900 ] } paragraph>
                        {
                            "Thanks for signing up at Carhara. Now you can sell/trade your car and get offers from dealers quickly and easily."
                        }
                    </Typography>

                    <Button
                        variant="primary"
                        sx={ {
                            maxWidth: "364px",
                            width: "100%",
                            height: "44px",
                        } }
                    // onClick={ () =>
                    //     router.push( data.user.role_id === 3 ? "/dealer" : "/consumer" )
                    // }
                    >

                        <Typography fontSize={ TextStyles.textMd.medium } color={ ColorStyles.primary[ 900 ] }> Go to My account</Typography>
                    </Button>


                    <Link href="/">
                        <Stack
                            mt={ 2 }
                            direction="row"
                            alignItems="center"
                            justifyContent="center"
                            spacing={ 1 }
                        >
                            <Typography  >or</Typography>
                            <Typography fontSize={ TextStyles.textMd.medium } color={ ColorStyles.primary[ 700 ] } textAlign="center" >
                                Back to home
                            </Typography>
                        </Stack>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
};

Siginup_success.layout = "Front";