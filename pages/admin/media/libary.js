import CarinputUpload from '@components/CartInput/CartinputUpload/CarinputUpload';
import Setting from '@components/CartInput/CartinputUpload/setting';
import { ContainerAdmin, ContentAdmin } from '@components/Layouts';
import { dataFolder } from '@data/admin/list-data-folder';
import CustomBreadcrumbs from '@elements/AdminLayout/CustomBreadcrumbs';
import { TreeItem, TreeView } from '@mui/lab';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, Stack, TextField, Typography } from '@mui/material';
import { ColorStyles } from '@theme/Designs';
import { ChevronDown, ChevronRight, Edit, Folder, Plus, ShoppingBag, Trash2, Upload } from 'feather-icons-react/build/IconComponents';
import Image from 'next/image';
import { useState } from 'react';


export const getServerSideProps = async ( context ) => {
    // Breadcrumbs
    const breadcrumbs = [
        {
            label: 'libary',
        }
    ];

    // return props with fetched data
    return {
        props: {
            titlePage: "Add Page",
            breadcrumbs,
        }
    };
};


const EditFolderDialog = ( { open, onClose, folderId, name, onEditFolder } ) => {

    const [ newFolderName, setNewFolderName ] = useState( name || '' );

    function handleCloseEditDialog() {
        onClose();
    }

    function handleSave() {
        onEditFolder( folderId, newFolderName );
        onClose();
    }

    return (
        <Dialog open={ open } onClose={ onClose }>
            <DialogTitle>Sửa tên thư mục</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    value={ newFolderName }
                    onChange={ ( e ) => setNewFolderName( e.target.value ) }
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={ handleCloseEditDialog }>Hủy</Button>
                <Button onClick={ handleSave }>Lưu</Button>
            </DialogActions>
        </Dialog>
    );
};

const Libary = ( { breadcrumbs, titlePage = "" } ) => {
    const [ data, setData ] = useState( dataFolder );

    const [ editFolder, setEditFolder ] = useState( { id: "", name: "", isOpen: false } );

    const handleEditFolderClick = ( folderId, folderName ) => {
        setEditFolder( { id: folderId, name: folderName, isOpen: true } );
    };

    const handleEditFolder = ( folderId, newFolderName ) => {
        setData( ( prevData ) => {
            // Tạo mảng mới với các thư mục được sao chép từ mảng cũ
            const newData = prevData.map( ( item ) => {
                if ( item.id === folderId ) {
                    // Nếu id trùng với thư mục cần sửa, trả về một thư mục mới với tên mới
                    return { ...item, label: newFolderName };
                }
                if ( item.children ) {
                    // Nếu có các thư mục con, đệ quy và thay đổi tên thư mục con
                    return { ...item, children: handleEditFolder( item.children, folderId, newFolderName ) };
                }
                return item;
            } );
            return newData;
        } );
        setEditFolder( { id: "", folderName: "", isOpen: false } );
    };

    const [ selectedFolderImages, setSelectedFolderImages ] = useState( [] );

    const [ isLibary, setIsLibary ] = useState( true );

    function getTreeItemsFromData( data ) {
        return data.map( ( item ) => {
            if ( item.children ) {
                return (
                    <TreeItem
                        key={ item.id }
                        nodeId={ item.id }
                        label={ item.label }
                        sx={ { color: ColorStyles.base.black } }>
                        { getTreeItemsFromData( item.children ) }
                    </TreeItem>
                );
            }
            return (
                <TreeItem key={ item.id } nodeId={ item.id } label={ item.label } onClick={ () => handleClick( item ) } />
            );
        } );
    }

    function handleClick( item ) {
        setSelectedFolderImages( item.images || [] );
    }
    const [ folderName, setFolderName ] = useState( '' );

    const handleAddFolderClick = () => {
        setOpenAddFolderDialog( true );
    };

    const handleAddFolderDialogClose = () => {
        setOpenAddFolderDialog( false );
    };

    const handleFolderNameChange = ( event ) => {
        setFolderName( event.target.value );
    };

    // hàm thực hiện add folder
    const handleAddFolder = () => {
        const newFolder = {
            id: ( Math.random() * 100000000000000000 ).toString(),
            label: folderName,
            children: [],
        };

        setData( ( prevState ) => [ ...prevState, newFolder ] );
        setFolderName( '' );
        setOpenAddFolderDialog( false );
    };
    // hàm mở dialog để thực hiện  add folder
    const [ openAddFolderDialog, setOpenAddFolderDialog ] = useState( false );

    const AddFolderDialog = () => {
        return (
            <Dialog open={ openAddFolderDialog } onClose={ handleAddFolderDialogClose }>
                <DialogTitle>Add Folder</DialogTitle>
                <DialogContent>
                    <TextField fullWidth value={ folderName } onChange={ handleFolderNameChange } />
                </DialogContent>
                <DialogActions>
                    <Button onClick={ handleAddFolderDialogClose }>Cancel</Button>
                    <Button onClick={ handleAddFolder }>Add</Button>
                </DialogActions>
            </Dialog>
        );
    };

    const [ openUploadFile, setOpenUploadFile ] = useState( false );

    const handleOpenUploadFile = () => setOpenUploadFile( true );

    const handleCloseUploadFile = () => setOpenUploadFile( false );

    return (
        <ContainerAdmin>
            <Stack direction="column" spacing={ 0.5 } mb={ 4 } >
                <Typography variant='title1'>{ titlePage }</Typography>
                <CustomBreadcrumbs crumbList={ breadcrumbs } />
            </Stack>
            <ContentAdmin>
                <Grid container className="page-libary" spacing={ 4 } >
                    <Grid item xs={ 12 } md={ 5 } lg={ 3 } >
                        <Box height="100%" className="list-menu-folder">

                            <Stack direction="row" alignItems="center" spacing={ 2 } padding={ 3 } className="actions-folder">
                                <AddFolderDialog />

                                <IconButton onClick={ handleAddFolderClick } className="btn-add">
                                    <Plus />
                                </IconButton>

                                <IconButton onClick={ handleEditFolderClick } className="btn-edit" >
                                    <Edit />
                                </IconButton>

                                { editFolder.isOpen && (
                                    <EditFolderDialog
                                        open={ editFolder.isOpen }
                                        onClose={ () => setEditFolder( { ...editFolder, isOpen: false } ) }
                                        folderId={ editFolder.id }
                                        name={ editFolder.name }
                                        onEditFolder={ handleEditFolder }
                                    />
                                ) }
                                <IconButton className="btn-deleted">
                                    <Trash2 />
                                </IconButton>
                            </Stack>

                            <TreeView
                                defaultCollapseIcon={ <ChevronDown /> }
                                defaultExpandIcon={ <ChevronRight /> }
                                defaultExpanded={ [ '1' ] }
                                defaultEndIcon={ <Folder /> }
                                className="tree-view-page-libary"
                            >
                                { getTreeItemsFromData( data ) }
                            </TreeView>
                        </Box>
                    </Grid>
                    <Grid item xs={ 12 } md={ 7 } lg={ 9 } >
                        <Box height="100%" className="render-image">
                            <Stack mx={ 3 } direction="row" justifyContent="space-between" alignItems="center" mb={ 3 }>
                                <Typography variant="title1">Medias: /carhara</Typography>
                                <Button className="btn-upload" startIcon={ <Upload /> } onClick={ handleOpenUploadFile }>
                                    Upload
                                </Button>
                            </Stack>
                            { selectedFolderImages.length > 0 ? (
                                <Box className="render-image-item">
                                    { selectedFolderImages.map( ( image, index ) => (
                                        <Box key={ index }
                                            sx={ {
                                                width: "100%",
                                                height: "100%",
                                                position: "relative",
                                                cursor: "pointer"
                                            } }>
                                            <Image
                                                src={ image }
                                                alt={ `Image ${ index }` }
                                                width={ 300 }
                                                height={ 300 }
                                                style={ { width: "100%", height: "100%", objectFit: "cover" } }
                                            />
                                            <Box sx={ { position: "absolute", top: "-7px", right: "-1rem" } }>
                                                <Setting />
                                            </Box>
                                        </Box>
                                    ) ) }
                                </Box>
                            ) : (
                                <Box textAlign="center" className="no-data-image">
                                    <Stack direction="column" alignItems="center" spacing={ 2 }>
                                        <ShoppingBag size={ 40 } />
                                        <Typography variant="heading3">No images selected.</Typography>
                                    </Stack>
                                </Box>
                            ) }
                        </Box>
                    </Grid>
                </Grid>
                <CarinputUpload
                    openUploadFile={ openUploadFile }
                    handleCloseUploadFile={ handleCloseUploadFile }
                />
            </ContentAdmin>
        </ContainerAdmin>

    );
};

export default Libary;