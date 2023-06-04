import { ROWS_PER_PAGE } from "@configs/constants";
import { useState } from "react";

export const useAdminColumn = ( attrCols, contents ) => {

    const [ order, setOrder ] = useState( attrCols.order || 'desc' );
    const [ orderBy, setOrderBy ] = useState( attrCols.orderBy || 'id' );
    const [ selected, setSelected ] = useState( [] );

    const [ page, setPage ] = useState( attrCols.page || 0 );
    const [ rowsPerPage, setRowsPerPage ] = useState( ROWS_PER_PAGE );

    const handleRequestSort = ( event, property ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder( isAsc ? 'desc' : 'asc' );
        setOrderBy( property );
    };

    const handleChangePage = ( event, newPage ) => {
        setPage( newPage );
    };

    const handleChangeRowsPerPage = ( event ) => {
        setRowsPerPage( parseInt( event.target.value, 10 ) );
        setPage( 0 );
    };    

    const handleSelectAllClick = ( event ) => {
        if ( event.target.checked ) {
            const newSelected = contents.map( ( n ) => n.name );
            setSelected( newSelected );
            return;
        }
        setSelected( [] );
    };    

    const handleClick = ( event, name ) => {
        const selectedIndex = selected.indexOf( name );
        let newSelected = [];

        if ( selectedIndex === -1 ) {
            newSelected = newSelected.concat( selected, name );
        } else if ( selectedIndex === 0 ) {
            newSelected = newSelected.concat( selected.slice( 1 ) );
        } else if ( selectedIndex === selected.length - 1 ) {
            newSelected = newSelected.concat( selected.slice( 0, -1 ) );
        } else if ( selectedIndex > 0 ) {
            newSelected = newSelected.concat(
                selected.slice( 0, selectedIndex ),
                selected.slice( selectedIndex + 1 ),
            );
        }

        setSelected( newSelected );
    };    

    const isSelected = ( name ) => selected.indexOf( name ) !== -1;

    return { order, orderBy, selected, page, rowsPerPage, isSelected, handleRequestSort, handleChangePage, handleChangeRowsPerPage, handleSelectAllClick, handleClick };
};

const useAdminPanel = ( defaultValue, required ) => { 

    return {};
};

export default useAdminPanel;