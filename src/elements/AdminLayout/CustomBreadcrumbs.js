import { Breadcrumbs, Typography } from '@mui/material';
import { ColorStyles } from '@theme/Designs';
import { ChevronRight } from 'feather-icons-react/build/IconComponents';
import Link from 'next/link';

function CustomBreadcrumbs( { crumbList = [], ...props } ) {
    const linkAdmin = '/admin';

    props = {
        separator: <ChevronRight color={ ColorStyles.success[ 500 ] } />,
        sx: { marginBottom: "24px" },
        ...props
    };

    return (
        <Breadcrumbs { ...props } >
            <Link key={ `crumb-dashboard` } href={ linkAdmin }>
                <Typography variant="title3" color={ ColorStyles.success[ 500 ] } >Dashboard</Typography>
            </Link>
            { crumbList.length > 0 && crumbList.map( ( crumb, index ) => {
                return Boolean( crumb.link ) ?
                    <Link key={ `crumb-${ index }` } href={ crumb.link }>
                        <Typography variant="title3" color={ ColorStyles.success[ 500 ] }>{ crumb.label }</Typography>
                    </Link> :
                    <Typography key={ `crumb-${ index }` } variant="title4">{ crumb.label }</Typography>;
            } ) }
        </Breadcrumbs>
    );
}

export default CustomBreadcrumbs;
