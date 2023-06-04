import { CarInput } from '@components/CartInput/CartInput';
import CartInputSelect from '@components/CartInput/CartInputSelect';
import CheckboxGroup from '@components/CartInput/CheckBoxGroup';
import { OPTIONS_MENUS, OPTIONS_SELECT_MENUS } from '@configs/constants';
import useForm from '@hooks/useForm';
import { Box, FormControl, Stack } from '@mui/material';
import { ColorStyles } from '@theme/Designs';
import { Upload } from 'feather-icons-react/build/IconComponents';

const FormConfigMenuItem = ( { handleOpenUploadFile } ) => {

    const { formRef, form, valid, handleChange, hanldeBlur } = useForm(
        {
            name: "", slug: "", description: "",
        },
        { name: true, slug: true, description: true }
    );

    return (
        <Box sx={ { backgroundColor: "#ffff", padding: 4, width: '60%' } } ref={ formRef } component='form' noValidate >
            <FormControl required={ true } sx={ { mb: 2 } } >
                <CarInput
                    name="name"
                    placeholder='name'
                    label="name"
                    value={ form.name }
                    onChange={ handleChange }
                    onBlur={ hanldeBlur }
                    size='small'
                />
            </FormControl>
            <FormControl fullWidth required={ true } sx={ { mb: 2 } }>
                <CarInput
                    name="description"
                    label="description"
                    placeholder="description"
                    value={ form.description }
                    onChange={ handleChange }
                    onBlur={ hanldeBlur }
                    multiline
                    rows={ 4 }
                />
            </FormControl>
            <FormControl fullWidth required={ true } sx={ { mb: 2 } } >
                <CarInput
                    name="name"
                    placeholder='name'
                    label="name"
                    value={ form.name }
                    onChange={ handleChange }
                    onBlur={ hanldeBlur }
                    size='small'
                />
            </FormControl>
            <Box my={ 3 }>
                <Stack
                    alignItems="center"
                    justifyContent="center"
                    bgcolor={ ColorStyles.Foundation.brown[ 500 ] }
                    sx={ {
                        borderStyle: "dotted",
                        borderColor: ColorStyles.accent[700][ 700 ],
                        width: 150,
                        margin: "auto",
                        height: 150,
                        cursor: "pointer"
                    } }
                    onClick={ handleOpenUploadFile }
                >
                    <Upload size={ 100 } color={ ColorStyles.Foundation.Black[ 500 ] } />
                </Stack>
            </Box>
            <Stack direction='column' spacing={ 1 } alignItems='start' my={ 2 } >
                <CheckboxGroup
                    name='Menu xổ xuống'
                    options={ OPTIONS_MENUS }
                    title="Menu xổ xuống"
                    className="row"
                />
                <CheckboxGroup
                    name='Menu Mega'
                    options={ OPTIONS_MENUS }
                    title="Menu Mega"
                    className="row"
                />
            </Stack>
            <Stack direction='column' spacing={ 1 } alignItems='start' my={ 2 } >
                <CartInputSelect
                    label="Độ rộng Menu Mega"
                    sx={ { width: "100% !important", padding: 0 } }
                    options={ OPTIONS_SELECT_MENUS }
                    defaultOption="ĐỘ RỘNG" />
            </Stack>
        </Box>
    );
};

export default FormConfigMenuItem;