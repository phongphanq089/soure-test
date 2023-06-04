import { Button, Stack } from "@mui/material";
import { Plus } from "feather-icons-react/build/IconComponents";

const Acctions = ( { children, handleAction, type, noIcon } ) => {

    return (
        <Stack margin={ 3 } alignItems="end">
            <Button
                onClick={ handleAction }
                variant="btn-style-4"
                startIcon={ !noIcon && <Plus /> }
                type={ type }
            >
                { children }
            </Button>
        </Stack>
    );
};

export default Acctions;