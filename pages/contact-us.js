
import styled from '@emotion/styled';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import FormContact from '../src/components/home/FormContact';
import { ColorStyles, TextStyles } from '../src/theme/Designs';


const Root = styled( 'div' )( ( { theme } ) => ( {
    [ theme.breakpoints.down( 'sm' ) ]: {
        display: "none",
    },
} ) );
const Contact = () => {
    return (
        <Box className="boxContactDealer">
            <Container className="containerBanner" maxWidth="lg">
                <Grid
                    className="gridBanner"
                    container
                    alignItems="center"
                    justifyContent="center"
                    px={ 3 }
                    minHeight={ 720 }
                >
                    <Grid
                        className="gridItemContact"
                        item
                        justifyContent="center"
                        xs={ 12 }
                        md={ 6 }
                        px={ 2 }
                    >
                        <Typography mb={ 6 } color={ ColorStyles.gray[ 900 ] } fontSize={ TextStyles.displayLg.bold }  >
                            Contact us
                        </Typography>
                        {/* from contact */ }
                        < FormContact />
                    </Grid>
                    <Grid item xs={ 12 } md={ 6 } textAlign={ "center" }>
                        <Root><Image src="/contact.png" alt="" width={ 720 } height={ 800 } /></Root>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

Contact.layout = "Front";
export default Contact;