import { ButtonGroup } from '@mui/material';
import PropTypes from "prop-types";

function Action( { options = {}, children } ) {
    options = {
        variant: "contained",
        "aria-label": "outlined primary button group",
        ...options
    };
    return (
        <ButtonGroup spacing={ 5 } { ...options }>
            { children }
        </ButtonGroup>
    );
}

export default Action;

Action.propTypes = {
    options: PropTypes.object,
    children: PropTypes.node
};