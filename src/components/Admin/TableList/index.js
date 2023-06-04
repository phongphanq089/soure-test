import { ROWS_PER_PAGE, ROWS_PER_PAGE_OPTION } from '@configs/constants';
import { Button, Paper, Table, TableContainer, TablePagination, Toolbar } from '@mui/material';
import { Plus, Trash2 } from 'feather-icons-react/build/IconComponents';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from "prop-types";
import Action from './Action';
import Body from './Body';
import Filter from './Filter';
import Head from './Head';

function TableList( { headers = [], rows = [], options = {} } ) {
    const router = useRouter();

    options = {
        isAction: true,
        isFilter: true,
        isSearch: true,
        ...options
    };

    const TableHead = options.head && dynamic( () => import( `@components/${ options.head }` ), { ssr: false } ) || Head;
    const TableBody = options.body && dynamic( () => import( `@components/${ options.body }` ), { ssr: false } ) || Body;

    return (
        <Paper sx={ { width: '100%', mb: 2 } }>
            <TableContainer>
                {/* Toolbar for table list */ }
                <Toolbar sx={ {
                    height: "40px",
                    maxWidth: "unset",
                    minHeight: { lg: "40px" },
                    py: '40px !important',
                    pl: { sm: 2 },
                    pr: { xs: 1, sm: 1 }
                } }>
                    {
                        options.isAction &&
                        <Action options={ { spacing: 3 } }>
                            <Button variant="btn-style-1" startIcon={ <Trash2 size={ 20 } /> }> Delete</Button>
                            <Link href={ `${ router.pathname }/add` }>
                                <Button variant="btn-style-2" endIcon={ <Plus size={ 20 } /> } >
                                    Add new
                                </Button>
                            </Link>
                        </Action>
                    }

                    { options.isFilter && <Filter isSearch={ options.isSearch } /> }
                </Toolbar>
                {/* End Toolbar for table list */ }

                {/* Table List */ }
                <Table sx={ { minWidth: 750 } } size="small" >
                    <TableHead cols={ headers } />
                    {/* <Head cols={ headers } /> */ }
                    <TableBody headers={ headers } rows={ rows } options={ options } />
                </Table>
                {/* End Table List */ }
            </TableContainer>

            {/* Paging for table List */ }
            <TablePagination
                rowsPerPageOptions={ ROWS_PER_PAGE_OPTION }
                component="div"
                count={ rows.length }
                rowsPerPage={ ROWS_PER_PAGE }
                page={ 0 }
                onPageChange={ () => { } }
                onRowsPerPageChange={ () => { } }
            />
            {/* End Paging for table List */ }
        </Paper>
    );
}

export default TableList;

TableList.propTypes = {
    headers: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
    options: PropTypes.object
};