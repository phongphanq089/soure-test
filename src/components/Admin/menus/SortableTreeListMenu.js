import CarinputUpload from '@components/CartInput/CartinputUpload/CarinputUpload';
import { Box, Collapse, List } from '@mui/material';
import { forwardRef, useState } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';
import FormConfigMenuItem from './FormConfigMenuItem';
import { generateNodeProps } from './deletedNodeTree';

export const SortableTreeListMenu = forwardRef( ( { treeData, setTreeData }, ref ) => {

    const [ open, setOpen ] = useState( false );

    const [ selectedNode, setSelectedNode ] = useState( treeData );

    const handleClick = ( node ) => {
        setOpen( !open );
        setSelectedNode( node );
    };
    console.log( selectedNode );

    const handleGenerateNodeProps = generateNodeProps( handleClick, setTreeData, treeData, open );

    const [ openUploadFile, setOpenUploadFile ] = useState( false );

    const handleOpenUploadFile = () => setOpenUploadFile( true );

    const handleCloseUploadFile = () => setOpenUploadFile( false );

    return (
        <Box>
            <SortableTree
                forwardRef={ ref }
                treeData={ treeData }
                onChange={ setTreeData }
                isVirtualized={ false }
                useDragHandle={ true }
                generateNodeProps={ handleGenerateNodeProps }
            />
            <Collapse in={ open } timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <FormConfigMenuItem handleOpenUploadFile={ handleOpenUploadFile } />
                </List>
            </Collapse>
            <CarinputUpload openUploadFile={ openUploadFile } handleCloseUploadFile={ handleCloseUploadFile } />
        </Box>
    );
} )

