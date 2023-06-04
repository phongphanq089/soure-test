import { alpha, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import { ColorStyles } from "@theme/Designs";
import { Filter, Trash2 } from "feather-icons-react/build/IconComponents";
import PropTypes from "prop-types";

export function EnhancedTableToolbar( props ) {

    const { numSelected } = props;

    return (
        <Toolbar
            sx={ {
                height: "40px",
                minHeight: { lg: "40px" },
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...( numSelected > 0 && {
                    bgcolor: ( theme ) =>
                        alpha( theme.palette.primary.main, theme.palette.action.activatedOpacity ),
                } ),
            } }
        >
            { numSelected > 0 ? (
                <Typography
                    sx={ { flex: '1 1 100%' } }
                    component="div"
                    variant="title1"
                >
                    { numSelected } selected
                </Typography>
            ) : (
                <Typography
                    sx={ { flex: '1 1 100%' } }
                    variant="title1"
                    component="div"
                >
                    Filter
                </Typography>
            ) }

            { numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <Trash2
                            color={ ColorStyles.base.black } />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        <Filter
                            color={ ColorStyles.base.black } />
                    </IconButton>
                </Tooltip>
            ) }
        </Toolbar>
    );
}
EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};
