import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
const ButtonPlan = ( props ) => {

    return (
        <Button variant="primary" sx={ {
            width: "100%",
            height: "48px"

        } }
            onClick={ props.onClick ? () => props.onClick() : null } >{ props.children }</Button>
    );

};
Button.PropTypes = {
    onClick: PropTypes.func
};
export default ButtonPlan;