import { Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import PropTypes from "prop-types";

function Head( { cols = [], options = [] } ) {

    const orderBy = options.orderBy || 'id';
    const order = options.order || 'desc';

    return (
        <TableHead>
            <TableRow>
                <TableCell align={ 'center' } padding="checkbox">
                    <Checkbox
                        color="primary"
                        // indeterminate={ numSelected > 0 && numSelected < rowCount }
                        // checked={ rowCount > 0 && numSelected === rowCount }
                        // onChange={ onSelectAllClick }
                    />                    
                </TableCell>
                { cols.map( ( cell ) => (
                    <TableCell
                        key={ cell.id }
                        align={ 'center' }
                        padding={ cell.disablePadding ? 'none' : 'normal' }
                        sortDirection={ orderBy === cell.id ? order : false }
                    >
                        <TableSortLabel
                            active={ orderBy === cell.id }
                            direction={ orderBy === cell.id ? order : 'asc' }
                        >
                            { cell.label }
                        </TableSortLabel>
                    </TableCell>
                ) ) }
            </TableRow>
        </TableHead>
    );
}

export default Head;

Head.propTypes = {
    cols: PropTypes.array,
    options: PropTypes.array
};