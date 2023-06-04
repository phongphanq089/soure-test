import { Check } from "@mui/icons-material";
import { Button, Divider, Stack } from "@mui/material";
import { X } from "feather-icons-react/build/IconComponents";
import { useRouter } from "next/router";

const ActionButton = ( { options = {}, href } ) => {

    const router = useRouter();

    return (
        <>
            <Divider />
            <Stack direction='row' spacing={ 2 } paddingTop={ 2 } >
                <Button
                    variant="btn-style-1"
                    startIcon={ <X size={ 20 } /> }
                    onClick={ () => router.push( href ) }>
                    Cancel
                </Button>
                <Button
                    type="submit"
                    variant="btn-style-2"
                    endIcon={ <Check size={ 20 } /> }>
                    Save</Button>
            </Stack>
        </>
    );
};

export default ActionButton;