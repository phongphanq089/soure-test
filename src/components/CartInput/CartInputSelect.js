import { Box, FormControl, MenuItem, Select, Stack, Typography } from '@mui/material';
import { useState } from 'react';

const CartInputSelect = ( { options, defaultOption, sx, label } ) => {

    const [ value, setValue ] = useState( options.findIndex( option => option.label === defaultOption ) );

    const handleChange = ( event ) => {
        setValue( event.target.value );
    };

    const indexOptions = options.map( ( option, index ) => ( { ...option, value: index } ) );

    return (
        <Box className="show-select-admin" padding={ 2 } sx={ sx } >
            <Stack direction="column" spacing={ 1 }>
                { label && <Typography variant="lable1">{ label }</Typography> }
                <FormControl sx={ { width: "100% !important" } }>
                    <Select displayEmpty className="show-oder-select" value={ value } onChange={ handleChange }>
                        { indexOptions.map( ( option ) => (
                            <MenuItem className="list-item-select-1" key={ option.value } value={ option.value }>
                                { option.label }
                            </MenuItem>
                        ) ) }
                    </Select>
                </FormControl>
            </Stack>
        </Box>
    );
};

export default CartInputSelect;