import { Box, Breadcrumbs, Stack, Typography } from '@mui/material';
import { ChevronRight } from 'feather-icons-react/build/IconComponents';
import Link from 'next/link';

const HeaderBreadcrumbs = ( props ) => {

    const { ispageOderPackage,
        isPageOderDetail,
        pageAlloder,
        isOderDetailAccount,
        IsOderPackageAccount,
        isDetailsReturns,
        isRequestCancellation,
        isPageList,
        isAddPage,
        isEditPage,

        isPostList,
        isAddPost,
        isEditPost,

        isPageProductList,
        isCategoriesProduct,
        isAddProduct,
        isAddCategories,
        isLibary,
        isMenu
    } = props;

    //page oder package
    const pageOderPackage = [
        <Link key="1" href="/tracking-order/order-details">
            <Typography variant="lable12">Order details</Typography>
        </Link>,
        <Typography key="2" variant="description8">Track Package</Typography>
    ];
    //page oder Detail Account
    const oderDetailAccount = [
        <Link key="1" href="/my-account/all-orders">
            <Typography variant="lable12">All Orders</Typography>
        </Link>,
        <Typography key="2" variant="description8">Order details</Typography>
    ];
    // page oder Package Account 
    const oderPackageAccount = [
        <Link key="1" href="/my-account/all-orders">
            <Typography variant="lable12">All Orders</Typography>
        </Link>,
        <Link key="2" href="/my-account/all-orders/order-details">
            <Typography variant="lable12">Order details</Typography>
        </Link>,
        <Typography key="3" variant="description7">Track Package</Typography>
    ];
    // page details Returns
    const detailsReturns = [
        <Link key="1" href="/my-account/my-returns">
            <Typography variant="lable12">My Returns</Typography>
        </Link>,
        <Typography key="2" variant="description8">Details</Typography>
    ];
    // page request Cancellation
    const requestCancellation = [
        <Link key="1" href="/my-account/my-cancellations">
            <Typography variant="lable12">My Cancellations</Typography>
        </Link>,
        <Typography key="2" variant="description8">Details</Typography>
    ];
    // admin page list
    const PageList = [
        <Link key="1" href="/admin">
            <Typography variant="lable13">Dashboard</Typography>
        </Link>,
        <Typography key="2" variant="description8">Page List</Typography>
    ];
    // admin page list ===>  add page 
    const addPage = [
        <Link key="1" href="/admin">
            <Typography variant="lable13">Dashboard</Typography>
        </Link>,
        <Link key="1" href="/admin/contents/page">
            <Typography variant="lable13">Page List</Typography>
        </Link>,
        <Typography key="3" variant="description8">Add page</Typography>
    ];
    // admin page list ===> edit page 
    const editPage = [
        <Link key="1" href="/admin">
            <Typography variant="lable13">Dashboard</Typography>
        </Link>,
        <Link key="1" href="/admin/contents/page">
            <Typography variant="lable13">Page List</Typography>
        </Link>,
        <Typography key="3" variant="description8">Edit page</Typography>
    ];


    // admin page list
    const PostList = [
        <Link key="1" href="/admin">
            <Typography variant="lable13">Dashboard</Typography>
        </Link>,
        <Typography key="2" variant="description8">Post List</Typography>
    ];
    // admin page list ===>  add page 
    const addPost = [
        <Link key="1" href="/admin">
            <Typography variant="lable13">Dashboard</Typography>
        </Link>,
        <Link key="1" href="/admin/contents/post">
            <Typography variant="lable13">Post List</Typography>
        </Link>,
        <Typography key="3" variant="description8">Add post</Typography>
    ];
    // admin page list ===> edit page 
    const editPost = [
        <Link key="1" href="/admin">
            <Typography variant="lable13">Dashboard</Typography>
        </Link>,
        <Link key="1" href="/admin/contents/post">
            <Typography variant="lable13">Post List</Typography>
        </Link>,
        <Typography key="3" variant="description8">Edit post</Typography>
    ];

    // page manage product
    const pageProductList = [
        <Link key="1" href="/admin">
            <Typography variant="lable13">Dashboard</Typography>
        </Link>,
        <Typography key="3" variant="description8"> Product List</Typography>
    ];
    // page manage product ===> add prodcut
    const addProduct = [
        <Link key="1" href="/admin">
            <Typography variant="lable13">Dashboard</Typography>
        </Link>,
        <Link key="1" href="/admin/products/product">
            <Typography variant="lable13"> Product List</Typography>
        </Link>,
        <Typography key="3" variant="description8">add product</Typography>
    ];
    // page  categories product
    const categoriesProduct = [
        <Link key="1" href="/admin">
            <Typography variant="lable13">Dashboard</Typography>
        </Link>,
        <Typography key="3" variant="description8">Categories Product</Typography>
    ];
    // page categories product ===> add categories
    const addCategories = [
        <Link key="1" href="/admin">
            <Typography variant="lable13">Dashboard</Typography>
        </Link>,
        <Link key="1" href="/admin/manage-product/categories-product">
            <Typography variant="lable13">Categories Product</Typography>
        </Link>,
        <Typography key="3" variant="description8">add categories</Typography>
    ];
    // page libary
    const libary = [
        <Link key="1" href="/admin">
            <Typography variant="lable13">Dashboard</Typography>
        </Link>,
        <Typography key="3" variant="description8">File Manager</Typography>
    ];
    // page theme menu
    const menus = [
        <Link key="1" href="/admin">
            <Typography variant="lable13">Dashboard</Typography>
        </Link>,
        <Typography key="3" variant="description8">Menus</Typography>
    ];

    return (
        <>
            { isPageOderDetail && <Box className='header-order-detail'>
                <Stack direction="row" spacing={ 1 } alignItems="center">
                    <Breadcrumbs>
                        <Typography variant="description7">Order details</Typography>
                    </Breadcrumbs>
                    <ChevronRight />
                </Stack>
                <Typography variant="heading2">Order Details</Typography>
            </Box> }
            { ispageOderPackage === true &&
                <Box className='header-oder-package'>
                    <Breadcrumbs
                        separator={ <ChevronRight /> }
                    >
                        { pageOderPackage }
                    </Breadcrumbs>
                    <Typography variant="heading2">Tracking detail order</Typography>
                </Box>
            }
            {
                pageAlloder === true &&
                <Stack direction="row" spacing={ 1 } alignItems="center" mb={ 4 }>
                    <Breadcrumbs>
                        <Typography variant="description8">All Oder</Typography>
                    </Breadcrumbs>
                    <ChevronRight />
                </Stack>
            }
            {
                isOderDetailAccount === true &&
                <Box className='header-order-detail'>

                    <Breadcrumbs
                        separator={ <ChevronRight /> }
                    >
                        { oderDetailAccount }
                    </Breadcrumbs>
                    <Typography variant="heading2">Order Details</Typography>
                </Box>
            }
            {
                IsOderPackageAccount === true &&
                <Box className='header-oder-package'>
                    <Breadcrumbs
                        separator={ <ChevronRight /> }
                    >
                        { oderPackageAccount }
                    </Breadcrumbs>
                    <Typography variant="heading2">Tracking detail order</Typography>
                </Box>
            }
            {
                isDetailsReturns === true &&
                <Box className='header-oder-package'>
                    <Breadcrumbs
                        separator={ <ChevronRight /> }
                        sx={ { marginBottom: "24px" } }
                    >
                        { detailsReturns }
                    </Breadcrumbs>
                    <Typography variant="heading2" mt={ 3 }>Detail</Typography>
                </Box>
            }
            {
                isRequestCancellation === true &&
                <Box className='header-oder-package'>
                    <Breadcrumbs
                        separator={ <ChevronRight /> }
                        sx={ { marginBottom: "24px" } }
                    >
                        { requestCancellation }
                    </Breadcrumbs>
                    <Typography variant="heading2" mt={ 3 }>
                        Request cancellation
                    </Typography>
                </Box>
            }

            {
                isPageList === true &&
                <Breadcrumbs
                    separator={ <ChevronRight /> }
                    sx={ { marginBottom: "24px" } }
                >
                    { PageList }
                </Breadcrumbs>
            }
            {
                isAddPage === true &&
                <Breadcrumbs
                    separator={ <ChevronRight /> }
                    sx={ { marginBottom: "24px" } }
                >
                    { addPage }
                </Breadcrumbs>
            }
            {
                isEditPage === true &&
                <Breadcrumbs
                    separator={ <ChevronRight /> }
                    sx={ { marginBottom: "24px" } }
                >
                    { editPage }
                </Breadcrumbs>
            }

            {
                isPostList === true &&
                <Breadcrumbs
                    separator={ <ChevronRight /> }
                    sx={ { marginBottom: "24px" } }
                >
                    { PostList }
                </Breadcrumbs>
            }
            {
                isAddPost === true &&
                <Breadcrumbs
                    separator={ <ChevronRight /> }
                    sx={ { marginBottom: "24px" } }
                >
                    { addPost }
                </Breadcrumbs>
            }
            {
                isEditPost === true &&
                <Breadcrumbs
                    separator={ <ChevronRight /> }
                    sx={ { marginBottom: "24px" } }
                >
                    { editPost }
                </Breadcrumbs>
            }

            {
                isPageProductList === true &&
                <Breadcrumbs
                    separator={ <ChevronRight /> }
                    sx={ { marginBottom: "24px" } }
                >
                    { pageProductList }
                </Breadcrumbs>
            }
            {
                isCategoriesProduct === true &&
                <Breadcrumbs
                    separator={ <ChevronRight /> }
                    sx={ { marginBottom: "24px" } }
                >
                    { categoriesProduct }
                </Breadcrumbs>
            }
            {
                isAddProduct === true &&
                <Breadcrumbs
                    separator={ <ChevronRight /> }
                    sx={ { marginBottom: "24px" } }
                >
                    { addProduct }
                </Breadcrumbs>
            }
            {
                isAddCategories === true &&
                <Breadcrumbs
                    separator={ <ChevronRight /> }
                    sx={ { marginBottom: "24px" } }
                >
                    { addCategories }
                </Breadcrumbs>
            }
            {
                isLibary === true &&
                <Breadcrumbs
                    separator={ <ChevronRight /> }
                    sx={ { marginBottom: "24px" } }
                >
                    { libary }
                </Breadcrumbs>
            }
            {
                isMenu === true &&
                <Breadcrumbs
                    separator={ <ChevronRight /> }
                    sx={ { marginBottom: "24px" } }
                >
                    { menus }
                </Breadcrumbs>
            }
        </>

    );
};

export default HeaderBreadcrumbs;
