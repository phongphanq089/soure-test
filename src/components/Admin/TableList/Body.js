import { Checkbox, IconButton, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { ColorStyles } from '@theme/Designs';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import _ from 'lodash';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from "prop-types";
import TableCells from './TableCells';

function Body( { headers = [], rows = [], options = [] } ) {
    const router = useRouter();

    const CustomCheckBox = options.cells && options.cells.checkbox && dynamic( () => import( `@components/${ options.cells.checkbox }` ), { ssr: false } ) || TableCells || TableCell;
    const CustomAction = options.cells && options.cells.action && dynamic( () => import( `@components/${ options.cells.action }` ), { ssr: false } ) || TableCells || TableCell;
    const CustomTableCellAll = options.cells && options.cells.all && dynamic( () => import( `@components/${ options.cells.all }` ), { ssr: false } ) || undefined;

    return (
        <TableBody>
            {
                rows.length > 0 && rows.map( ( row, index ) => (
                    <TableRow
                        key={ `row-${ index }` }
                        hover
                    // onClick={ ( event ) => handleClick( event, row.name ) }
                    // role="checkbox"
                    // aria-checked={ isItemSelected }
                    // tabIndex={ -1 }
                    // key={ row.name }
                    // selected={ isItemSelected }
                    >
                        <CustomCheckBox padding="checkbox" row={ row } cell={ 'checkbox' }>
                            <Checkbox
                                color="primary"
                            // checked={ isItemSelected }
                            />
                        </CustomCheckBox>
                        {
                            _.map( row, ( cell, key ) => {
                                if ( !Boolean( _.find( headers, { id: key } ) ) ) return '';

                                const CustomTableCell = options.cells &&
                                    _.get( options.cells, key ) &&
                                    dynamic( () => import( `@components/${ _.get( options.cells, key ) }` ), { ssr: false } ) ||
                                    CustomTableCellAll ||
                                    TableCells ||
                                    TableCell;

                                return (
                                    <CustomTableCell key={ `body-${ key }` } row={ row } cell={ key }>
                                        <Typography variant="description7">
                                            { cell }
                                        </Typography>
                                    </CustomTableCell>
                                );
                            } )
                        }
                        <CustomAction align="center" row={ row } cell={ 'action' } >
                            <Link href={ `${ router.pathname }/edit/${ row.slug || row.id }` } >
                                <IconButton size="large" >
                                    <FeatherIcon icon="edit" width='20' color={ ColorStyles.base.black } />
                                </IconButton>
                            </Link>

                            <IconButton size="large" >
                                <FeatherIcon icon="trash" width='20' color={ ColorStyles.gray[ 500 ] } />
                            </IconButton>
                        </CustomAction>
                    </TableRow>
                ) )
            }
        </TableBody>
    );
}

export default Body;

Body.propTypes = {
    headers: PropTypes.array,
    rows: PropTypes.array,
    options: PropTypes.object
};