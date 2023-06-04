
import data_image from "@data/upload";
import { Dropzone, FileMosaic, FullScreen, ImagePreview, VideoPreview } from "@files-ui/react";
import { TabContext, TabPanel } from '@mui/lab';
import { Box, Dialog, Grid, IconButton, Pagination, Tab, Tabs, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { ColorStyles } from '@theme/Designs';
import { File, X } from 'feather-icons-react/build/IconComponents';
import { useState } from 'react';
import { ImageOrFileIcon } from "./CheckFileOrImage";
import usePagination from "./Panigation";
import Setting from './setting';

const BASE_URL = "https://www.myserver.com";

const CarinputUpload = ( { openUploadFile, handleCloseUploadFile } ) => {
    const [ extFiles, setExtFiles ] = useState( [] );
    const [ imageSrc, setImageSrc ] = useState( undefined );
    const [ videoSrc, setVideoSrc ] = useState( undefined );

    const updateFiles = ( incommingFiles ) => {
        console.log( "incomming files", incommingFiles );
        setExtFiles( incommingFiles );
    };
    const onDelete = ( id ) => {
        setExtFiles( extFiles.filter( ( x ) => x.id !== id ) );
    };
    const handleSee = ( imageSource ) => {
        setImageSrc( imageSource );
    };
    const handleWatch = ( videoSource ) => {
        setVideoSrc( videoSource );
    };
    const handleStart = ( filesToUpload ) => {
        console.log( "advanced demo start upload", filesToUpload );
    };
    const handleFinish = ( uploadedFiles ) => {
        console.log( "advanced demo finish upload", uploadedFiles );
    };
    const handleAbort = ( id ) => {
        setExtFiles(
            extFiles.map( ( ef ) => {
                if ( ef.id === id ) {
                    return { ...ef, uploadStatus: "aborted" };
                } else return { ...ef };
            } )
        );
    };
    const handleCancel = ( id ) => {
        setExtFiles(
            extFiles.map( ( ef ) => {
                if ( ef.id === id ) {
                    return { ...ef, uploadStatus: undefined };
                } else return { ...ef };
            } )
        );
    };

    // tab panel change
    const [ value, setValue ] = useState( '1' );
    const handleChange = ( event, newValue ) => {
        setValue( newValue );
    };

    // custom panagation get api
    let [ page, setPage ] = useState( 1 );
    const PER_PAGE = 15;
    const count = Math.ceil( data_image.length / PER_PAGE );
    const _DATA = usePagination( data_image, PER_PAGE );
    const handlePanagation = ( e, p ) => {
        setPage( p );
        _DATA.jump( p );
    };

    return (
        <Dialog open={ openUploadFile } onClose={ handleCloseUploadFile } className="modal-cartinput-upload" >
            <Box className="colse-cart" onClick={ handleCloseUploadFile }>
                <IconButton><X size={ 30 } color={ ColorStyles.base.black } /></IconButton>
            </Box>
            <Box className="cartinput-upload-content">

                <Stack direction="row" alignItems="center" spacing={ 1 } >
                    <File size={ 30 } color={ ColorStyles.success[ 500 ] } />
                    <Typography variant="title-button">Media</Typography>
                </Stack>
                <TabContext value={ value } >
                    {/* ===========header tab============ */ }
                    <Tabs
                        onChange={ handleChange }
                        value={ value }
                        variant="fullWidth"
                        className="cartinput-upload-content-header"
                    >
                        <Tab label="upload file" value="1" />
                        <Tab label="Media" value="2" />
                    </Tabs>
                    {/*================= tab content 1 =============*/ }
                    <TabPanel value="1" className="cartinput-upload-content-1" >
                        <Dropzone
                            onChange={ updateFiles }
                            minHeight="195px"
                            value={ extFiles }
                            accept="image/*, video/*"
                            maxFiles={ 3 }
                            maxFileSize={ 2 * 1024 * 1024 }
                            label="Drag'n drop files here or click to browse"
                            uploadConfig={ {
                                // autoUpload: true
                                url: BASE_URL + "/file",
                                cleanOnUpload: true
                            } }
                            onUploadStart={ handleStart }
                            onUploadFinish={ handleFinish }
                            fakeUpload
                            actionButtons={ {
                                position: "after",
                                abortButton: {},
                                deleteButton: {},
                                uploadButton: {}
                            } }
                        >
                            { extFiles.map( ( file ) => (
                                <FileMosaic
                                    { ...file }
                                    key={ file.id }
                                    onDelete={ onDelete }
                                    onSee={ handleSee }
                                    onWatch={ handleWatch }
                                    onAbort={ handleAbort }
                                    onCancel={ handleCancel }
                                    resultOnTooltip
                                    alwaysActive
                                    preview
                                    info
                                />
                            ) ) }
                        </Dropzone>
                        <FullScreen
                            open={ imageSrc !== undefined }
                            onClose={ () => setImageSrc( undefined ) }
                        >
                            <ImagePreview src={ imageSrc } />
                        </FullScreen>
                        <FullScreen
                            open={ videoSrc !== undefined }
                            onClose={ () => setVideoSrc( undefined ) }
                        >
                            <VideoPreview src={ videoSrc } autoPlay controls />
                        </FullScreen>
                    </TabPanel>
                    {/*================= tab content 2 =============*/ }
                    <TabPanel value="2" sx={ { height: 400, position: "relative" } } className="cartinput-upload-content-2" >
                        <Box sx={ { width: "100%", overflow: 'auto', maxHeight: 300 } }>
                            <Grid container spacing={ 4 } textAlign="center">
                                { _DATA.currentData().map( ( item, index ) => {
                                    return (
                                        <Grid item xs={ 12 } sm={ 4 } md={ 2 } key={ index } position="relative">
                                            <ImageOrFileIcon src={ item.image } alt="My Image" />
                                            {/* ========SETTING EDIT FILE,IMAGE============ */ }
                                            <Box sx={ { position: "absolute", top: "28px", right: "-1rem" } }>
                                                <Setting />
                                            </Box>
                                        </Grid> );
                                } ) }
                            </Grid>
                        </Box>
                        {/* panagation  */ }
                        <Stack spacing={ 4 } alignItems="center" marginTop={ 4 }>
                            <Pagination count={ count } size="medium" variant="outlined" color="primary" page={ page } onChange={ handlePanagation } />
                        </Stack>
                    </TabPanel>
                </TabContext>
            </Box>
        </Dialog>
    );
};
export default CarinputUpload;