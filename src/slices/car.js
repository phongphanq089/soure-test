import { createSlice } from '@reduxjs/toolkit';

export const carSlice = createSlice( {
    name: 'car',
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
        getVehicle: ( state, action ) => {
            return {
                ...state,
                ...action.payload,
                loading: true
            };
        },
    }
} );

//export actions
export const { setOptions, getVehicle } = carSlice.actions;

//export selectors
export const selectorCar = ( state ) => state.car;

//export reducer
const carReducer = carSlice.reducer;
export default carReducer;