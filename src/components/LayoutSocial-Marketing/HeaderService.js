import CarEditor from '@components/CartInput/CarEditor';
import parseToHtml from '@configs/parseTohtml';
import { Box, Typography } from '@mui/material';
import 'react-quill/dist/quill.bubble.css';

const HeaderService = ( { header, description, session, status } ) => {
    return (
        <Box textAlign="center">
            <Typography variant="heading1">
                { status !== "authenticated" ? header : <CarEditor value={ header } field='' /> }
            </Typography>
            <Typography variant="description2">
                { status !== "authenticated" ? parseToHtml( description ) : <CarEditor value={ description } field='' /> }
            </Typography>
        </Box>
    );
};

export default HeaderService;