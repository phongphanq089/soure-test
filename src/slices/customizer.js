import { createSlice } from '@reduxjs/toolkit';

export const customizerSlice = createSlice( {
    name: 'customizer',
    initialState: {
        activeDir: 'ltr',
        activeNavbarBg: '#0b70fb', // This can be any color,
        activeSidebarBg: '#ffffff', // This can be any color
        activeMode: 'light', // This can be light or dark
        activeTheme: 'DEARLER_THEME', // BLUE_THEME, GREEN_THEME, RED_THEME, BLACK_THEME, PURPLE_THEME, INDIGO_THEME
        SidebarWidth: 240,
    },
    reducers: {
        setTheme: ( state, action ) => {
            return {
                ...state,
                activeTheme: action.payload,
            };
        },
        setDarkMode: ( state, action ) => {
            return {
                ...state,
                activeMode: action.payload,
            };
        },
        setNavbarBg: ( state, action ) => {
            return {
                ...state,
                activeNavbarBg: action.payload,
            };
        },
        setSidebarBg: ( state, action ) => {
            return {
                ...state,
                activeSidebarBg: action.payload,
            };
        },
        setDir: ( state, action ) => {
            return {
                ...state,
                activeDir: action.payload,
            };
        }
    }
} );

//export actions
export const { setTheme, setDarkMode, setNavbarBg, setSidebarBg, setDir } = customizerSlice.actions;

//export selectors
export const selectorCustomizer = ( state ) => state.customizer;

//export reducer
const customizerReducer = customizerSlice.reducer;
export default customizerReducer;
