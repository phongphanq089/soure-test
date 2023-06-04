import CarEditor from '@components/CartInput/CarEditor';
import PopUp from '@components/popUp.js/PopUp';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';

function Video( props ) {
    const { isLogin,
        field,
        description,
        reverse,
        url,
        style,
        backgroundColor,
        title_popup,
        desc_popup,
        content_popup1,
        content_popup2
    } = props;

    return (
        <Container>
            <Grid container spacing={ 3 } py={ 8 } flexDirection={ reverse } >
                <Grid item xs={ 12 } md={ 6 }>
                    <Box width="100%" >
                        { url !== undefined && <video
                            src={ url }
                            controls={ true }
                            style={ { borderRadius: '10px', width: '100%' } }
                        /> }
                    </Box>
                </Grid>
                <Grid item xs={ 12 } md={ 6 } >
                    { !isLogin ?
                        <Stack spacing={ 3 } px={ 2 } justifyContent="space-between" height="100%">
                            <Typography variant='description' color={ style }>
                                { description }
                            </Typography>
                            <PopUp styles={ style }
                                isLogin={ isLogin }
                                title_popup={ title_popup }
                                desc_popup={ desc_popup }
                                content_popup1={ content_popup1 }
                                content_popup2={ content_popup2 }
                                backgroundColor={ backgroundColor }
                            />
                        </Stack>
                        :
                        <Stack spacing={ 3 } px={ 2 } py={ 2 } justifyContent="space-between" height="100%" >
                            <Typography variant='description' >
                                <CarEditor value={ description } field={ field } color={ style } />
                            </Typography>
                            <PopUp styles={ style }
                                isLogin={ isLogin }
                                title_popup={ title_popup }
                                desc_popup={ desc_popup }
                                content_popup1={ content_popup1 }
                                content_popup2={ content_popup2 }
                                backgroundColor={ backgroundColor }
                            />
                        </Stack> }
                </Grid>
            </Grid>
        </Container>
    );
}

Video.propTypes = {

};

export default Video;
