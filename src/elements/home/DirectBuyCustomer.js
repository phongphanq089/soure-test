import BlockItemPage from '@components/BkockItemPage';
import BlockTitle from '@components/BlockTitle';
import ButtonAction from '@components/ButtonAction';
import { Grid, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import dynamic from 'next/dynamic';
import { useState } from 'react';
const ReactQuill = dynamic( import( 'react-quill' ), { ssr: false } );

function DirectBuyCustomer( { directBuyCustomer, mdDown, isLogin, data: { title, description } } ) {

    const [ isDesktop, setIsdesktop ] = useState( true );

    const lgUp = useMediaQuery( ( theme ) => theme.breakpoints.down( 'md' ) );

    return (
        <Grid container spacing={ 0 } py={ 8 } >
            <Grid item xs={ 12 } lg={ 12 }>
                <BlockTitle isLogin={ isLogin } title={ title } description={ description } />
            </Grid>
            <Grid item xs={ 12 } lg={ 12 }>
                <BlockItemPage data={ directBuyCustomer } mdDown={ mdDown } isLogin={ isLogin } />
            </Grid>
            <Box margin={ "auto" } >
                <ButtonAction >View Pricing</ButtonAction>
            </Box>
        </Grid>
    );
}
export default DirectBuyCustomer;
