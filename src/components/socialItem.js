import CarEditor from '@components/CartInput/CarEditor';
import { CarInputFile } from '@components/CartInput/CarInputFile';
import { Button, FormControl, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from "next/link";
import { ColorStyles } from '../theme/Designs';

function SocialItem( props ) {

    const { image, isLogin, text, button, reverse, href } = props;

    return (
        <Grid container spacing={ 0 } sx={ { mb: 9, flexDirection: reverse } }>

            <Grid item xs={ 12 } md={ 6 } bgcolor={ ColorStyles.gray[ 100 ] }>

                { !isLogin && <Image src={ image } alt='' width={ 609 } height={ 371 } /> }

                { isLogin && <FormControl fullWidth sx={ { height: "100%" } } ><CarInputFile image={ image } /></FormControl> }

            </Grid>
            <Grid item xs={ 12 } md={ 6 } display='flex' justifyContent={ 'center' } bgcolor={ ColorStyles.primary[ 600 ] }>
                <Stack spacing={ 3 } justifyContent="center" alignItems="center" textAlign="center" padding="3rem 2rem">

                    <Typography variant="body9">{ !isLogin ? text : <CarEditor value={ text } field='' /> }</Typography>

                    <Link href={ href } passHref><Button variant='secondary' >Learn more</Button></Link>

                </Stack>
            </Grid>
        </Grid >
    );
}

export default SocialItem;
