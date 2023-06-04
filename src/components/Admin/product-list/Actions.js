import { Box, Button, FormControl, MenuItem, Select, Stack } from '@mui/material';
import { Check, Plus, Trash2, X } from 'feather-icons-react/build/IconComponents';
import Link from 'next/link';
import { useState } from 'react';

const Actions = () => {

    const [ show, setShow ] = useState( "" );

    const handleChange = ( event ) => {
        setShow( event.target.value );
    };

    return (
        <Stack direction='column' spacing={ 2 } mx={ 2 } pb={ 4 } pt={ 1 }>
            <Stack direction='row' spacing={ 2 } >
                <Button variant="btn-style-1" startIcon={ <Trash2 size={ 20 } /> }> Delete</Button>
                <Link href='/admin/manage-product/product-list/add-product'>
                    <Button variant="btn-style-2" endIcon={ <Plus size={ 20 } /> } >
                        Add new
                    </Button>
                </Link>
            </Stack>
            <Stack
                direction="row"
                alignItems="center"
                sx={ {
                    flexDirection: { xs: "column", lg: "row" },
                    gap: { xs: "24px", lg: "24px" },
                    alignItems: { xs: "start", lg: "center" }
                } }
            >
                <Box className="show-select-admin">
                    <FormControl>
                        <Select
                            displayEmpty
                            className="show-oder-select"
                            value={ show }
                            onChange={ handleChange }
                        >
                            <MenuItem className="list-item-select-1" value="">Chose categories </MenuItem>
                            <MenuItem className="list-item-select-1" value={ 10 }>
                                <Check />Chose categories
                            </MenuItem>
                            <MenuItem className="list-item-select-1" value={ 20 }>
                                <X /> Chose categories
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box className="show-select-admin">
                    <FormControl>
                        <Select
                            displayEmpty
                            className="show-oder-select"
                            value={ show }
                            onChange={ handleChange }
                        >
                            <MenuItem className="list-item-select-1" value="">Chose status </MenuItem>
                            <MenuItem className="list-item-select-1" value={ 10 }>
                                <Check />
                                enabled
                            </MenuItem>
                            <MenuItem className="list-item-select-1" value={ 20 }>
                                <X />
                                disable
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box className="show-select-admin">
                    <FormControl>
                        <Select
                            displayEmpty
                            className="show-oder-select"
                            value={ show }
                            onChange={ handleChange }
                        >
                            <MenuItem className="list-item-select-1" value=""> featured </MenuItem>
                            <MenuItem className="list-item-select-1" value={ 10 }>
                                <Check />
                                featured
                            </MenuItem>
                            <MenuItem className="list-item-select-1" value={ 20 }>
                                <X />
                                featured
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Stack>
        </Stack>

    );
};

export default Actions;