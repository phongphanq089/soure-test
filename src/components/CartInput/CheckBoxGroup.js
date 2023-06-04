import { Checkbox, FormControl, FormControlLabel, FormGroup, Radio, Typography } from '@mui/material';
import { useState } from 'react';

const CheckboxGroup = ( { options, onChange, label, enableSelectAll, inputType, title, checkedValues, className } ) => {
    const [ checkedItems, setCheckedItems ] = useState( checkedValues || {} );

    const [ yesNoValue, setYesNoValue ] = useState( null );

    const handleChange = ( event ) => {
        const { name, type, checked, value } = event.target;
        let updatedCheckedItems = { ...checkedItems };
        if ( type === 'checkbox' ) {
            updatedCheckedItems[ name ] = checked;
        } else {
            updatedCheckedItems = { ...checkedValues, [ name ]: value };
        }
        // If value is not passed, set checkbox value to false by default
        if ( inputType === 'checkbox' && value === undefined ) {
            updatedCheckedItems[ name ] = false;
        }
        setCheckedItems( updatedCheckedItems );
        if ( onChange ) {
            onChange( updatedCheckedItems );
        }
    };

    const handleSelectAll = () => {
        const allChecked = Object.keys( checkedItems ).length === options.length;
        const newCheckedItems = {};
        if ( !allChecked ) {
            options.forEach( ( option ) => {
                newCheckedItems[ option.value ] = true;
            } );
        }
        setCheckedItems( newCheckedItems );
        if ( onChange ) {
            onChange( newCheckedItems );
        }
    };

    const handleYesNoChange = ( event ) => {
        const { value } = event.target;
        setYesNoValue( value === yesNoValue ? null : value );
        if ( onChange ) {
            onChange( { ...checkedItems, yesNoValue: value === yesNoValue ? null : value } );
        }
    };

    return (
        <FormControl component="fieldset" className="custom-checkbox-group">
            { title && <Typography variant="body8">{ title }</Typography> }
            <FormGroup className={ className }>
                { label && label && <legend>{ label }</legend> }
                { options.map( ( option ) => (
                    <FormControlLabel
                        key={ option.value }
                        control={
                            inputType === 'checkbox' ? (
                                <Checkbox
                                    checked={ checkedItems[ option.value ] || false }
                                    onChange={ handleChange }
                                    name={ option.value }
                                />
                            ) : (
                                <Radio
                                    checked={ option.value === yesNoValue }
                                    onChange={ handleYesNoChange }
                                    value={ option.value }
                                    // name="yesNoValue"
                                    name={ option.value }
                                />
                            )
                        }
                        label={ option.label }
                    />
                ) ) }
                { enableSelectAll && (
                    <FormControlLabel control={ <Checkbox onChange={ handleSelectAll } checked={ Object.keys( checkedItems ).length === options.length } /> } label="Select All" />
                ) }
            </FormGroup>
        </FormControl>
    );
};

export default CheckboxGroup;
