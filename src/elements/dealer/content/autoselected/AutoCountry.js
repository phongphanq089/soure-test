/* eslint-disable @next/next/no-img-element */
import countries from '@configs/countries';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function CountrySelect() {
    return (
        <Autocomplete
            sx={ { width: "100%", height : "44px" } }
            options={ countries }
            autoHighlight
            getOptionLabel={ ( option ) => option.label }
            renderOption={ ( props, option ) => (
                <Box component="li" sx={ { '& > img': { mr: 2, flexShrink: 0 } } } { ...props }>
                    <img
                        loading="lazy"
                        width="20"
                        src={ `https://flagcdn.com/w20/${ option.code.toLowerCase() }.png` }
                        srcSet={ `https://flagcdn.com/w40/${ option.code.toLowerCase() }.png 2x` }
                        alt=""
                    />
                    { option.label } ({ option.code }) +{ option.phone }
                </Box>
            ) }
            renderInput={ ( params ) => (
                <TextField
                    { ...params }
                    inputProps={ {
                        ...params.inputProps,
                        autoComplete: 'new-password',
                    } }
                />
            ) }
        />
    );
}

