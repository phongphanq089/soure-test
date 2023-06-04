import { OutlinedInput, Typography, useFormControl } from "@mui/material";
import _ from "lodash";
import { useMemo, useState } from "react";
import InputMask from "react-input-mask";
import { validate } from "../../configs/Vaildate";
import { ColorStyles, TextStyles } from "../../theme/Designs";

export const CarInputMask = ( {
    label,
    rules,
    note,
    mask,
    maskChar,
    onChange,
    onBlur,
    ...props
} ) => {
    const { focused, filled, required } = useFormControl() || {};
    const [ focus, setFocus ] = useState( false );

    let message = "";
    if ( required ) message = validate.empty.msg;

    if ( rules === undefined ) rules = false;

    if ( rules && required ) {
        if ( rules.empty !== undefined ) {
            if ( rules.empty !== true ) message = _.get( rules, "empty", message );
            _.unset( rules, "empty" );
        }
    }

    const helperText = useMemo( () => {
        if ( !required ) {
            return "";
        }

        if ( focused ) {
            if ( !focus ) {
                setFocus( true );
            }
        } else {
            if ( !rules && filled ) {
                return "";
            }
        }

        if ( focus ) {
            if ( !filled ) return message;
            if (
                filled &&
                _.replace( _.replace( props.value, "-", "" ), maskChar, "" ) === ""
            )
                return message;

            if ( !_.isEmpty( rules ) ) {
                const msg = _.filter(
                    _.map( rules, function ( v, k ) {
                        if ( k === "empty" ) return;

                        const valid = _.get( validate, `${ k }` );
                        let isValid = false;

                        switch ( k ) {
                            case "minLength":
                                isValid = valid.rule(
                                    props.value,
                                    v.value === undefined ? valid.length : v.value
                                );
                                break;
                            case "compare":
                                isValid = valid.rule(
                                    props.value,
                                    v.value === undefined ? "" : v.value
                                );
                                break;
                            case "phone":
                                isValid = valid.rule( props.value, { mask, maskChar } );
                                break;
                            default:
                                isValid = valid.rule( props.value );
                                break;
                        }

                        if ( isValid ) {
                            const key = _.isObject( v ) ? `${ k }.msg` : `${ k }`;
                            const getMsg = _.get( rules, `${ key }`, valid.msg );

                            return getMsg === true ? valid.msg : getMsg;
                        }

                        return;
                    } )
                );

                if ( msg.length > 0 ) return msg.toString();
            }
        }

        return "";
    }, [
        focused,
        focus,
        filled,
        message,
        rules,
        required,
        props.value,
        mask,
        maskChar,
    ] );

    return (
        <>
            <Typography fontSize={ TextStyles.textSm.medium } color={ ColorStyles.gray[ 900 ] } mb="6px" paragraph>
                { label } { required ? <span>*</span> : "" }
            </Typography>

            <InputMask
                mask={ mask }
                onChange={ onChange }
                onBlur={ onBlur }
                value={ props.value }
                disabled={ false }
                maskChar={ maskChar }
            >
                { () => <OutlinedInput { ...props } error={ Boolean( helperText ) } /> }
            </InputMask>

            { helperText ? (
                <Typography
                    variant="label1"
                    color="#dc2626"
                    mt={ 0.5 }
                    mb={ 0 }
                    paragraph
                >
                    { helperText }
                </Typography>
            ) : note !== undefined ? (
                <Typography variant="label1" mt={ 0.5 } mb={ 0 } paragraph>
                    { note }
                </Typography>
            ) : (
                ""
            ) }
        </>
    );
};
