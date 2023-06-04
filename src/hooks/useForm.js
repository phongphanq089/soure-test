import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const getParent = ( el, selector ) => {
    var parent_container = el;

    do {
        parent_container = parent_container.parentNode;
    } while ( !parent_container.matches( selector ) &&
        parent_container !== document.body
    );

    return parent_container;
};

const useForm = ( defaultValue, required ) => {
    const [ valid, setValid ] = useState( false );
    const [ form, setForm ] = useState( defaultValue );
    const [ require, setRequire ] = useState( required );
    const formRef = useRef();

    //   useEffect(() => {
    //     const newForm = document.body.querySelector("form");
    //     console.log(newForm);
    //     const data = new FormData(newForm);
    //     data.forEach((v, k) => {
    //       console.log(`${k} : ${v}`);
    //     });
    //   }, []);
    // console.log(getParent(event.target, "form"));

    const hanldeBlur = ( event ) => {
        setTimeout( () => {
            if ( require[ event.target.name ] !== undefined ) {
                setRequire( {
                    ...require,
                    [ event.target.name ]: event.target.getAttribute( "aria-invalid" ) === "false" ?
                        false : true,
                } );
            }

            const isValid = _.findKey( require, ( o ) => {
                return o;
            } );

            if ( !isValid ) {
                setValid( true );
            } else {
                setValid( false );
            }
        }, 100 );
    };

    const handleChange = ( event ) => {
        setForm( {
            ...form,
            [ event.target.name ]: event.target.value,
        } );
    };

    return { formRef, valid, setValid, form, setForm, handleChange, hanldeBlur };
};

useForm.propTypes = {
    defaultValue: PropTypes.object,
    required: PropTypes.object,
};

export default useForm;