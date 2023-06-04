import { Stack, Typography } from '@mui/material';
import { Markup } from 'interweave';
import CarEditor from './CartInput/CarEditor';

const BlockTitle = ( props ) => {

    const { isLogin, filed, variantTile, paddingBottom, variantDesc, title, description } = props;

    return (
        <Stack width="100%"
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={ 2 }
            paddingBottom={ paddingBottom || "64px" }
            sx={ { px: { md: 9, xs: 3 } } }
            textAlign="center"
        >
            <Typography variant={ variantTile || "heading2" }>
                { !isLogin && title ? title : <CarEditor value={ title } field={ filed || "" } /> }
            </Typography>
            { description && <Typography variant={ variantDesc || "description3" }>
                { !isLogin && description ? <Markup tagName="div" content={ description } /> : <CarEditor value={ description } field='DealerShipOne.Block_socialmedia_heder' /> }
            </Typography> }
        </Stack>
    );
};

export default BlockTitle;