import { CarInput } from "@components/CartInput/CartInput";
import useForm from "@hooks/useForm";
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl } from "@mui/material";
import Acctions from "./Acctions";


const ModlalAddForm = ( { open, handleClose } ) => {

    const { formRef, form, valid, handleChange, hanldeBlur } = useForm(
        {
            name: "", slug: "", description: "",
        },
        { name: true, slug: true, description: true }
    );

    return (
        <Dialog open={ open } onClose={ handleClose }>
            <DialogTitle>{ "Add Menu Type" }</DialogTitle>
            <Divider />
            <DialogContent>
                <Box ref={ formRef } component='form' noValidate >
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
                    <FormControl fullWidth required={ true } sx={ { mb: 2 } }>
                        <CarInput
                            name="slug"
                            label="slug"
                            placeholder='slug'
                            value={ form.slug }
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
                </Box>
            </DialogContent>
            <DialogActions>
                <Acctions type="submit" noIcon={ true } handleAction={ handleClose } >save</Acctions>
            </DialogActions>
        </Dialog>
    );
};

export default ModlalAddForm


