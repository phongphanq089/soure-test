import { createSlice } from '@reduxjs/toolkit';
import produce from 'immer';

export const settingSlice = createSlice( {
    name: 'setting',
    initialState: {
        loading: false
    },
    reducers: {
        setOptions: ( state, action ) => {
            return {
                ...state,
                ...action.payload,
                loading: true
            };
        },
        setOption: ( state, action ) => {
            return produce( state, draftState => {
                const keys = action.payload.key.split( '.' );
                let target = draftState;
                for ( let i = 0; i < keys.length - 1; i++ ) {
                    target = target[ keys[ i ] ];
                }
                target[ keys[ keys.length - 1 ] ] = action.payload.value;
            } );
        }
    }
} );

//export actions
export const { setOptions, setOption } = settingSlice.actions;

//export selectors
export const selectorSetting = ( state ) => state.setting;
export const selectorThemeOptions = ( state ) => state.setting.themeOption;
export const selectorThemeDelearOptions = ( state ) => state.setting.themeDealerOption;

//export reducer
const settingReducer = settingSlice.reducer;
export default settingReducer;