import { Alert } from "@mui/material";
import _ from "lodash";
import React from "react";

const Flash = ( { result, ...props } ) => {
    const { status, message } = result;
    if ( _.isEmpty( message ) ) return "";

    return (
        <Alert
            severity={ status === true ? "success" : "error" }
            elevation={ 6 }
            variant="filled"
            { ...props }
        >
            { message }
        </Alert>
    );
};

export default Flash;
