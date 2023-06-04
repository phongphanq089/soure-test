import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { selectorSetting } from "../slices/setting";

export const useSetting = ( key, defaultValue, type = null ) => {
    const settings = useSelector( selectorSetting );
    const dispatch = useDispatch();
    const value = _.get( settings, key, defaultValue );
    const baseUrl = _.get( settings, "system.baseUrl" );

    const setValue = ( sKey, sValue ) => {
        // dispatch( {
        //     type: "setting/setOption",
        //     payload: {
        //         key: sKey,
        //         value: sValue
        //     }
        // } )
    };

    const getValue = ( gkey, gDefaultValue = null, gtype = null ) => {
        if ( gtype === 'url' ) {
            return baseUrl + _.get( settings, gkey, gDefaultValue );
        }
        return _.get( settings, gkey, gDefaultValue );
    };

    if ( type === 'url' ) {
        return [ baseUrl + value, getValue, setValue ];
    }
    return [ value, getValue, setValue ];
};