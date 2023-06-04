import { IconButton } from "@mui/material";
import { Edit, Trash2 } from "feather-icons-react/build/IconComponents";

const deleteNode = ( treeData, target ) => {
    return treeData.filter( ( node ) => {
        if ( node.title === target ) {
            return false;
        }

        if ( node.children ) {
            node.children = deleteNode( node.children, target );
            return true;
        }

        return true;
    } );
};

export const generateNodeProps = ( handleClick, setTreeData, treeData ) => ( rowInfo ) => ( {
    buttons: [
        <IconButton key={ `add-${ rowInfo.index }` } onClick={ handleClick }>
            <Edit size={ 20 } />
        </IconButton>,
        <IconButton
            key={ `delete-${ rowInfo.index }` }
            onClick={ () => {
                const newTreeData = deleteNode( treeData, rowInfo.node.title );
                setTreeData( newTreeData );
            } }
        >
            <Trash2 size={ 20 } />
        </IconButton>,
    ],
} );