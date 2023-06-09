import { Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import PropTypes from "prop-types";

export function EnhancedTableHead( props ) {
    
    const { headerCells, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    
    const createSortHandler = ( property ) => ( event ) => {
        onRequestSort( event, property );
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={ numSelected > 0 && numSelected < rowCount }
                        checked={ rowCount > 0 && numSelected === rowCount }
                        onChange={ onSelectAllClick }
                    />
                </TableCell>
                { headerCells.map( ( headCell ) => (
                    <TableCell
                        key={ headCell.id }
                        align={ 'center' }
                        padding={ headCell.disablePadding ? 'none' : 'normal' }
                        sortDirection={ orderBy === headCell.id ? order : false }
                    >
                        <TableSortLabel
                            active={ orderBy === headCell.id }
                            direction={ orderBy === headCell.id ? order : 'asc' }
                            onClick={ createSortHandler( headCell.id ) }
                        >
                            { headCell.label }
                        </TableSortLabel>
                    </TableCell>
                ) ) }
            </TableRow>
        </TableHead>
    );
}
EnhancedTableHead.propTypes = {
    headerCells: PropTypes.array.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf( [ 'asc', 'desc' ] ).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};