import { Button } from '@mui/material';
import Link from 'next/link';
import PropTypes from 'prop-types';

//"/dealership-services/view-pricing"
const ButtonAction = ( props ) => {

    const { children, href, variant } = props;

    return (
        <Link href={ href || "/dealership-services/view-pricing" } >
            <Button variant={ variant || "primary-1" } sx={ { width: 135, height: 37 } } >
                { children }
            </Button>
        </Link>
    );
};

Button.propTypes = {
    onClick: PropTypes.func
};
export default ButtonAction;
