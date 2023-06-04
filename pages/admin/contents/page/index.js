import TableList from "@components/Admin/TableList";
import { ContainerAdmin, ContentAdmin } from "@components/Layouts";
import axiosClient from "@configs/axios";
import { ROWS_PER_PAGE } from "@configs/constants";
import CustomBreadcrumbs from "@elements/AdminLayout/CustomBreadcrumbs";
import { useAdminColumn } from "@hooks/useAdminPanel";
import { Box, Stack, Typography } from "@mui/material";

export async function getServerSideProps() {
    // call API to get data
    const res = await axiosClient.get( '@/contents/pages', {
        params: {
            fields: 'id, name, slug, excerpt, status, featured, created',
            meta_fields: 'id,key,value',
            admin_column: true,
            limit: ROWS_PER_PAGE
        }
    } );
    const breadcrumbs = [
        {
            label: `Page List`
        }
    ];
    // return props with fetched data
    return {
        props: {
            breadcrumbs,
            titlePage: 'Page List',
            contents: res.data,
            admin_column: res.admin_column || []
        }
    };
}

const PageList = ( { contents, admin_column, breadcrumbs, titlePage = "" } ) => {

    const {
        order,
        orderBy,
        selected,
        page,
        rowsPerPage,
        isSelected,
        handleRequestSort,
        handleChangePage,
        handleChangeRowsPerPage,
        handleSelectAllClick,
        handleClick
    } = useAdminColumn( {}, contents );

    return (
        <ContainerAdmin>
            <Stack direction="column" spacing={ 0.5 } mb={ 4 }>
                <Typography variant='title1'>{ titlePage }</Typography>
                <CustomBreadcrumbs crumbList={ breadcrumbs } />
            </Stack>
            <ContentAdmin>
                <Box sx={ { width: '100%' } }  >
                    <TableList headers={ admin_column } rows={ contents } options={ {
                        isFilter: false
                    } } />
                </Box>
            </ContentAdmin>
        </ContainerAdmin>
    );
};


export default PageList;