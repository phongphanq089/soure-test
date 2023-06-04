import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import carReducer from '@slices/car';
import customizerReducer from '@slices/customizer';
import settingReducer from '@slices/setting';
import { createWrapper } from 'next-redux-wrapper';
import { combineReducers } from "redux";
import { rootSaga } from './saga';

const rootReducer = combineReducers( {
    customizer: customizerReducer,
    setting: settingReducer,
    car: carReducer
} );

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// create a makeStore function
const makeStore = ( ( initialState, options ) => {
    const store = configureStore( {
        reducer: rootReducer,
        middleware: [ sagaMiddleware ],
    } );

    // Run the root saga after the middleware is attached to the store
    sagaMiddleware.run( rootSaga );
    
    return store;
} );

// export an assembled wrapper
export const wrapper = createWrapper( makeStore, { debug: false } );