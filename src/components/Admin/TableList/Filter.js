import { Box, TextField } from "@mui/material";
import PropTypes from "prop-types";

function Filter( { listSelect = [], isSearch = true } ) {
    return (
        <Box className="TableList-Filter">
            { isSearch === true && <TextField label="Filter" value='' />}
        </Box>
    );
}

export default Filter;

Filter.propTypes = {
    listSelect: PropTypes.array,
    isSearch: PropTypes.bool
};