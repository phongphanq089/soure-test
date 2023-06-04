import { InputAdornment, TextField } from '@mui/material';

const FormTextField = ( { size = "medium", type = "text", name, value, onChange, placeholder, startIcon } ) => {
    return (
        <TextField
            size={ size }
            type={ type }
            name={ name }
            value={ value }
            onChange={ onChange }
            placeholder={ placeholder }
            InputProps={ { startAdornment: <InputAdornment position="start">{ startIcon }</InputAdornment> } }
        />
    );

};

export default FormTextField;