import CarEditor from '@components/CartInput/CarEditor';
import styled from '@emotion/styled';
import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import { Stack } from '@mui/system';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import 'react-quill/dist/quill.bubble.css';
import { ColorStyles, TextStyles } from '../../../theme/Designs';
import PlanDesktop from './PlanDesktop';
import PlanMobile from './PlanMobile';
const ReactQuill = dynamic( import( 'react-quill' ), { ssr: false } );

const Container = styled.div`
button {
    box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);
  }
}
`;
const PricingPlan = () => {
    const [ isDesktop, setIsdesktop ] = useState( true );
    const lgUp = useMediaQuery( ( theme ) => theme.breakpoints.down( 'md' ) );
    const session = useSession();

    return (
        <Grid container spacing={ 0 } sx={ {
            my: 9.6,
            mx: 'auto',
            px: 4,
            maxWidth: ( theme ) => theme.breakpoints.values.lg
        } }>
            <Grid item xs={ 12 } md={ 12 }>
                {
                    session.status !== "authenticated" ?
                        <Typography variant='h2' color={ ColorStyles.gray[ 900 ] } textAlign={ 'center' } mb={ 2.4 } >
                            Pricing plans
                        </Typography>
                        :
                        <Typography variant='h2Quillbold' color={ ColorStyles.gray[ 900 ] } >
                            <CarEditor value={ "Pricing plans" } field='' />
                        </Typography>
                }
                <Box
                    textAlign={ "center" }
                >
                    {
                        session.status !== "authenticated" ?
                            <Typography variant='subtitle3'
                            >Simple, transparent pricing that grows with you. Try any plan free for 30 days.</Typography>
                            :
                            <Typography variant='subtitle3Quill'
                                sx={ {
                                    ".quill .ql-container": {
                                        minHeight: "unset"
                                    },
                                } }
                            >
                                <CarEditor value={ "Simple, transparent pricing that grows with you. Try any plan free for 30 days." } field='' />
                            </Typography>
                    }
                </Box>
                <Stack
                    textAlign={ "center" }
                    marginTop={ "40px" }
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={ 1 }
                >
                    <Container> <Button variant=" secondary" size="medium" ><Typography fontSize={ TextStyles.textMd.medium }  >Monthly billing</Typography></Button></Container>
                    <Button ><Typography fontSize={ TextStyles.textMd.medium } > Annual billing</Typography></Button>
                </Stack>
            </Grid>
            { lgUp && isDesktop ? <PlanMobile /> : <PlanDesktop /> }
        </Grid>
    );
};

export default PricingPlan;