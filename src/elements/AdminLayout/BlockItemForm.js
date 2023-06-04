import { Box, Divider, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { ColorStyles } from "@theme/Designs";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const BlockItemForm = ( props ) => {

    const { children, icon, padding, marginY, title, sx } = props;

    return (
        <Box
            // 
            padding="8px"
            backgroundColor={ ColorStyles.base.white }
            marginY={ marginY }
            sx={ sx }
        >
            <ListItem>
                <ListItemAvatar sx={ { minWidth: 30 } }>
                    <FeatherIcon icon={ icon } width="22px" height="22px" color={ ColorStyles.base.black } />
                </ListItemAvatar>
                <ListItemText >
                    <Typography variant="title4">{ title }</Typography>
                </ListItemText>
            </ListItem>
            <Divider />
            <Box p={ 3 } my={ 1 }>
                { children }
            </Box>
        </Box>
    );
};

export default BlockItemForm;