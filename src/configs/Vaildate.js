export const isEmpty = ( value ) => {
    return Boolean( value === '' );
};

export const isEmail = ( value ) => {
    return !value.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const isPhone = ( value, { mask, maskChar } ) => {
    return _.includes( value, maskChar );
};

export const isURL = ( value ) => {
    return /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/.test( value );
};

export const isMinLength = ( value, length ) => {
    return _.toString( value ).length < _.toNumber( length );
};

export const isCompare = ( value, compare ) => {
    return _.toString( value ) !== _.toString( compare );
};

export const validate = {
    empty: {
        rule: isEmpty,
        msg: "This is field not empty."
    },
    email: {
        rule: isEmail,
        msg: "This is field email not valid."
    },
    phone: {
        rule: isPhone,
        msg: "This is field phone not valid."
    },
    minLength: {
        rule: isMinLength,
        length: 8,
        msg: "This is field not valid."
    },
    compare: {
        rule: isCompare,
        msg: "This is field not same."
    },
};