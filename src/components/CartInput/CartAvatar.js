import { Avatar } from "@mui/material";
import React from "react";

const Caravatar = ( { src, ...props } ) => {
    return (
        <Avatar
            src="/static/images/avatars/avatar_6.png"
            sx={ {
                height: 64,
                mb: 2,
                width: 64,
            } }
            { ...props }
        />
    );
};

export default Caravatar;
