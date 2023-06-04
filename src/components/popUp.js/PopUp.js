import { Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import { ColorStyles } from '@theme/Designs';
import { X } from 'feather-icons-react/build/IconComponents';
import * as React from 'react';
import ReactHtmlParser from 'react-html-parser';

export default function PopUp( props ) {

    const [ open, setOpen ] = React.useState( false );

    const handleOpen = () => setOpen( true );

    const handleClose = () => setOpen( false );

    return (
        <div>
            <Button variant="btn_default" onClick={ handleOpen }>
                Read more
            </Button>
            <Modal open={ open } onClose={ handleClose } >
                <Container sx={ {
                    // "overflowY": {
                    //     xs: " scroll",
                    //     lg: "unset"
                    // },
                    overflow: "auto",
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: {
                        xs: "90%",
                        md: "70%",
                    },
                    height: {
                        xs: "70%",
                        md: "70%",
                    },
                    bgcolor: 'background.paper',
                    borderRadius: "15px",
                    boxShadow: 24,
                    border: "none",
                    p: 9,
                } }>
                    <Box position='absolute' top={ 10 } right={ 10 }>
                        <Button onClick={ handleClose }>
                            <X size={ 30 } color={ ColorStyles.primary[ 700 ] } />
                        </Button>
                    </Box>
                    <Box textAlign={ "center" } position="relative" >
                        <Stack mb={ 3 } px={ 4 } spacing={ 2 }>
                            <Typography variant='h2' color={ ColorStyles.gray[ 900 ] }
                                sx={ { fontSize: { xs: "30px", sm: "45px", md: "60px" }, lineHeight: { xs: "40px", md: "60px", md: "72px" } } }
                            >{ ReactHtmlParser( props.title_popup ) }</Typography>
                            <Typography variant='subtitle1' color={ ColorStyles.gray[ 700 ] }>{ ReactHtmlParser( props.desc_popup ) }</Typography>
                        </Stack>
                        <Stack sx={ { paddingX: { xs: "1rem", sm: "4rem" } } } >
                            <Typography variant='subtitle4' mb={ 2 }> { ReactHtmlParser( props.content_popup1 ) }</Typography>
                            <Typography variant='subtitle4'>{ ReactHtmlParser( props.content_popup2 ) } </Typography>
                        </Stack>
                    </Box>
                </Container>
            </Modal>
        </div>
    );
}