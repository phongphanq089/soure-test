import { ButtonStyles, ColorStyles, TextStyles } from './Designs';
import { MediaBreakpoints, Theme } from './MediaBreakpoints';
import { adminSyle } from './stylesOveridePage/adminStyle';
const components = {
    MuiCssBaseline: {
        styleOverrides: {
            '*': {
                boxSizing: 'border-box',
            },
            html: {
                height: '100%',
                width: '100%',
            },
            body: {
                height: '100%',
                margin: 0,
                padding: 0,
            },
            a: {
                textDecoration: 'none',
                listStyle: 'none',
                color: ColorStyles.gray[ 500 ],
            },
            '#root': {
                height: '100%',
            },
            "*[dir='rtl'] .buyNowImg": {
                transform: 'scaleX(-1)',
            },
            '.buyNowImg': {
                position: 'absolute',
                right: '-44px',
                top: '-18px',
                width: '143px',
                height: '175px',
            },
            '.MuiCardHeader-action': {
                alignSelf: 'center !important',
            },
            '.scrollbar-container': {
                borderRight: '0 !important',
            },
            "*[dir='rtl'] .welcomebg:before": {
                backgroundPosition: 'top -24px left -9px !important',
            },
            '.boderBottom': {
                borderBottom: `1px solid ${ ColorStyles.gray[ 200 ] }`,
            },
            '.boder': {
                border: `1px solid ${ ColorStyles.gray[ 200 ] }`,
                borderRadius: '6px',
            },

            '.UploadFile': {
                width: '100%',
                marginTop: '16px',
                '.MuiStack-root': {
                    padding: '16px',
                    borderRadius: '10px',
                    border: `1px solid ${ ColorStyles.gray[ 200 ] }`,
                },
            },
            /*************
             * @Style_page
             * @Style_element
             ****************/
            //admin style layout
            ...adminSyle,

            //banner home
            '.banner-home': {
                width: "100%",
                margin: "auto",
                paddingTop: "1rem",
                [ MediaBreakpoints( Theme.down.md ) ]: {
                    width: "70%",
                },
                img: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }
            },
            //BlockItemStoried
            '.BlockItemStoried': {
                '.BlockItemStoried-item': {
                    [ MediaBreakpoints( Theme.up.sm ) ]: {
                        maxWidth: "90%",
                    },
                    minHeight: 400,
                    backgroundColor: "#FFF",
                    borderRadius: 3,
                    textAlign: "center",
                    padding: "0 2rem",
                    position: "relative",
                    '.BlockItemStoried-item-avatar': {
                        borderRadius: "50%",
                        position: "absolute",
                        top: "-66px",
                        left: "50%",
                        transform: "translateX(-50%)",
                    }
                },
                ".slick-dots": {
                    bottom: "21px",
                    "li button:before, li button:focus:before ": {
                        opacity: "1"
                    },

                    " li button:before": {
                        color: "#fff",
                        opacity: "1",
                        fontSize: "17px",
                        lineHeight: "17px"
                    },
                    " li.slick-active button:before": {
                        opacity: "1",
                        color: "#a3e635",
                        width: " 20px"
                    },
                },
                ".slick-list": {
                    overflow: "unset",
                    overflowX: "clip",
                    textAlign: "center"
                },
            },
            //booking
            '.booking': {
                ".slick-dots": {
                    bottom: "-35px",
                    "li button:before, li button:focus:before ": {
                        opacity: "1"
                    },

                    " li button:before": {
                        color: "#ccc",
                        opacity: "1",
                        fontSize: "17px",
                        lineHeight: "17px"
                    },
                    " li.slick-active button:before": {
                        opacity: "1",
                        color: "#a3e635",
                        width: " 20px"
                    }
                }
            },
            /*************
             * @Style_overide_components
             ****************/
            '.layout-front': {
                span: {
                    width: '100%',
                    '.quill': {
                        width: '100%',
                        '.ql-container.ql-bubble': {
                            width: '100%',
                            minHeight: 'unset',
                            '.ql-editor': {
                                padding: 1,
                                //backgroundColor: ColorStyles.accent[ 500 ],
                                overflow: 'unset'
                            },
                            '.ql-editor:focus': {
                                backgroundColor: ColorStyles.success[ 50 ],
                            },
                            '.ql-editor:not(:focus)': {
                                backgroundColor: 'unset',
                            },
                            '.ql-size-small': {
                                fontSize: 'unset'
                            },
                            '.ql-tooltip': {
                                zIndex: 999,
                                '.ql-tooltip-arrow': {
                                    display: 'none'
                                },
                                '.ql-toolbar': {
                                    padding: 16,
                                }
                            },
                        }
                    },
                },
            },
            '.MuiBox-root': {
                [ MediaBreakpoints( Theme.down.md ) ]: {
                    gap: 0,
                },
                '.MuiFormControl-root': {
                    '.MuiInputBase-root': {
                        '.MuiInputBase-input': {
                            padding: '16px 14px'
                        }
                    }
                }
            },

            ".slick-dots": {
                bottom: "12px",
                "li button:before, li button:focus:before ": {
                    opacity: "1"
                },

                " li button:before": {
                    color: "#fff",
                    opacity: "1",
                    fontSize: "17px",
                    lineHeight: "17px"
                },
                " li.slick-active button:before": {
                    opacity: "1",
                    color: "#a3e635",
                    width: " 20px"
                }

            },

            ".ImageHome_rigth": {
                position: "absolute",
                top: 0,
                right: 0,
                zIndex: 1,
            },
            ".ImageHome_left": {
                position: "absolute",
                bottom: 0,
                left: 0,
                zIndex: 1,
            },
            ".Image_banner": {
                objectFit: "cover"
            },

            "& .MuiList-padding": {
                p: "0px",
            },
            '.menuTopMobile': {
                '.MuiPaper-root': {
                    width: '100%',
                    padding: '1rem',
                    maxWidth: ' 100%',
                    left: '0 !important',
                    top: '60px !important',
                    boxShadow: ' rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    borderTop: '3px solid #134e4a',
                },
                '.MuiListItemButton-root': {
                    '&:hover': {
                        backgroundColor: ColorStyles.gray[ 200 ],
                        transition: 'all 0.4s ease',
                    },
                },
                'div.MuiList-root': {
                    '.MuiListItemButton-root': {
                        ml: 3,
                        borderBottom: '1px solid #d4d4d4',
                        padding: '7px 0',
                        a: {
                            textDecoration: 'none',
                        },
                    },
                },
            },
        },
    },
    MuiAvatar: {
        styleOverrides: {
            root: {
                backgroundColor: ColorStyles.success[ 500 ],
            }
        }
    },
    // custom modal popup message && popup time && Modal-CartInputUpload
    MuiDialog: {
        styleOverrides: {
            root: {
                '&.Dialog-popup': {
                    '.MuiBackdrop-root': {
                        backgroundColor: 'rgba(0, 0, 0, 0.7 )'
                    },
                },
                '&.modal-cartinput-upload': {
                    '.MuiDialog-container': {
                        '.MuiPaper-root.MuiDialog-paper': {
                            overflow: 'unset',
                            maxWidth: '1200px !important',
                            width: '100%',
                            position: 'relative',
                            [ MediaBreakpoints( Theme.down.md ) ]: {
                                margin: 16,
                                width: '90%',
                            },
                            '.colse-cart': {
                                position: 'absolute',
                                top: '-4%',
                                right: '-2%',
                                width: 50,
                                height: 50,
                                backgroundColor: ColorStyles.success[ 500 ],
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            },
                            '.cartinput-upload-content': {
                                padding: 32,
                                overflowY: 'scroll',
                                overflowX: 'clip',
                                '.cartinput-upload-content-header': {
                                    width: "100%",
                                    borderBottom: `1px solid ${ ColorStyles.success[ 500 ] }`,
                                    '.MuiTabs-scroller': {
                                        '.MuiTabs-flexContainer': {
                                            '.MuiButtonBase-root': {
                                                textTransform: 'none',
                                            },
                                            '.MuiButtonBase-root.MuiTab-root.Mui-selected ': {
                                                color: ColorStyles.success[ 500 ]
                                            },
                                        },
                                        '.MuiTabs-indicator': {
                                            backgroundColor: ColorStyles.success[ 500 ]
                                        }
                                    }
                                },
                                '.MuiTabPanel-root.cartinput-upload-content-1': {
                                    [ MediaBreakpoints( Theme.down.sm ) ]: {
                                        padding: '24px 0px'
                                    },
                                    '.dropzone-ui': {
                                        '.dz-ui-header': {
                                            [ MediaBreakpoints( Theme.down.sm ) ]: {
                                                // flexDirection: 'column',
                                                // alignItems: 'end',
                                                // justifyContent: 'unset',
                                                minHeight: 'auto',
                                                height: 'unset'
                                            },
                                            span: {
                                                alignItems: "center"
                                            }
                                        }
                                    }
                                }
                            },
                            '.cartinput-upload-content::-webkit-scrollbar-thumb': {
                                backgroundColor: ColorStyles.success[ 500 ],
                                borderRadius: 6,
                            },
                            '.cartinput-upload-content::-webkit-scrollbar': {
                                width: 4,
                            },
                        }
                    },

                },
            }
        }
    },
    MuiTablePagination: {
        styleOverrides: {
            selectLabel: {
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '28px',
                letterSpacing: 0,
                color: ' #101828',
            },
            displayedRows: {
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '28px',
                letterSpacing: 0,
                color: ' #101828',
            },
        },
    },
    MuiToolbar: {
        styleOverrides: {
            root: {
                width: '100%',
                margin: '0 auto',
                maxWidth: 1200,
            },
        },
    },

    MuiFormControl: {
        styleOverrides: {
            root: {
                width: '100%',
                borderRadius: '4px',
                '.MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderWidth: '1px',
                    borderColor: ColorStyles.success[ 500 ],

                },
                '.MuiInputBase-root': {
                    // '.MuiInputBase-input': {
                    //     padding: '16px 14px'
                    // }
                }
            }
        }
    },
    MuiContainer: {
        styleOverrides: {
            root: {
                paddingLeft: '15px !important',
                paddingRight: '15px !important',
                // maxWidth: '1600px',
            },
        },
    },

    MuiButton: {
        variants: [
            {
                props: {
                    variant: 'primary',
                    variant: 'contained',
                    variant: 'primary-1',
                    variant: 'primary-2',
                    variant: 'btn_default',
                    variant: 'secondary',
                    variant: 'linkgray',
                    variant: 'btn-style-1',
                    variant: 'btn-style-2',
                    variant: 'btn-style-3',
                    variant: 'btn-style-4',
                },
                style: {},
            },
        ],
        styleOverrides: {
            root: {
                textTransform: 'none',
                boxShadow: 'none',
                borderRadius: '4px',
                '&:hover': {
                    boxShadow: 'none',
                },
            },
            'btn_default': {
                ...TextStyles.textLg.medium,
                color: ColorStyles.gray[ 500 ],
                padding: 0,
            },
            'btn-style-2': {
                backgroundColor: ColorStyles.success[ 500 ],
                ...TextStyles.textSm.medium,
                color: ColorStyles.base.white,
                height: 40,
                whiteSpace: 'nowrap',
                ':hover': {
                    border: `1px solid ${ ColorStyles.success[ 500 ] }`,
                    backgroundColor: ColorStyles.base.white,
                    color: ColorStyles.success[ 500 ],
                },
            },
            'btn-style-1': {
                backgroundColor: ColorStyles.error[ 500 ],
                ...TextStyles.textSm.medium,
                color: ColorStyles.base.white,
                height: 40,
                whiteSpace: 'nowrap',
                ':hover': {
                    border: `1px solid ${ ColorStyles.error[ 500 ] }`,
                    backgroundColor: ColorStyles.base.white,
                    color: ColorStyles.error[ 500 ],
                },
            },
            contained: {
                backgroundColor: ColorStyles.success[ 500 ],
                height: 48,
                ':hover': {
                    backgroundColor: ColorStyles.success[ 500 ],
                },
            },
            primary: {
                ...ButtonStyles.primary.default,
                [ MediaBreakpoints( Theme.down.sm ) ]: {
                    height: 40,
                },
                ':hover': {
                    ...ButtonStyles.primary.hover,
                },
                ':disabled': {
                    ...ButtonStyles.primary.disabled,
                },
            },
            'primary-1': {
                ...ButtonStyles.primary.default,
                width: '207px !important',
                height: '70px !important',
                [ MediaBreakpoints( Theme.down.sm ) ]: {
                    height: '48px !important',
                },
                ':hover': {
                    ...ButtonStyles.primary.hover,
                },
                ':disabled': {
                    ...ButtonStyles.primary.disabled,
                },
            },
            'primary-2': {
                ...ButtonStyles.primary.default,
                width: '244px !important',
                height: '60px !important',
                [ MediaBreakpoints( Theme.down.sm ) ]: {
                    height: '48px !important',
                },
                ':hover': {
                    ...ButtonStyles.primary.hover,
                },
                ':disabled': {
                    ...ButtonStyles.primary.disabled,
                },
            },
            secondary: {
                ...ButtonStyles.secondary.default,
                ':hover': {
                    ...ButtonStyles.secondary.hover,
                },
                ':disabled': {
                    ...ButtonStyles.secondary.disabled,
                },
            },
            linkgray: {
                ...ButtonStyles.linkgray.default,
                ':hover': {
                    ...ButtonStyles.linkgray.hover,
                },
                ':disabled': {
                    ...ButtonStyles.linkgray.disabled,
                },
            },
        },
    },

    MuiListItem: {
        styleOverrides: {
            root: {
                borderRadius: '9px',
            },
        },
    },

    MuiCard: {
        styleOverrides: {
            root: {
                borderRadius: '20px',
                padding: '14px',
                margin: '15px',
                // boxShadow: '0px 7px 30px 0px rgba(90, 114, 123, 0.11)',
            },
        },
    },

    MuiListItemIcon: {
        styleOverrides: {
            root: {
                minWidth: '40px',
            },
        },
    },

    MuiGridItem: {
        styleOverrides: {
            root: {
                paddingTop: '30px',
                paddingLeft: '30px !important',
            },
        },
    },
    MuiLinearProgress: {
        styleOverrides: {
            root: {
                backgroundColor: '#ecf0f2',
                borderRadius: '6px',
            },
        },
    },
    MuiMenuItem: {
        styleOverrides: {
            root: {
                borderRadius: '0',
                padding: ( theme ) => `${ theme.spacing( 1 ) } 0!important`,
                borderBottom: `1px ${ ColorStyles.gray[ 100 ] } solid`,
            },
        },
    },
    MuiChip: {
        styleOverrides: {
            root: {
                fontWeight: '500',
                fontSize: '0.75rem',
            },
        },
    },
    MuiFormControl: {
        styleOverrides: {
            root: {
                '&.subscribe': {
                    input: {
                        height: 'inherit',
                    },
                },
            },
        },
    },
    MuiInputBase: {
        styleOverrides: {
            inputAdornedEnd: {
                borderRight: 'none!important',
            },
            inputAdornedStart: {
                borderLeft: 'none!important',
                paddingLeft: '10px!important',
            },
            inputMultiline: {
                border: 'none !important',
            },
        },
    },
    MuiInputLabel: {
        styleOverrides: {
            outlined: {
                ...TextStyles.textMd.normal,
                color: ColorStyles.gray[ 400 ],
                '&.Mui-focused': {
                    color: ColorStyles.gray[ 900 ],
                },
            },
        },
    },
    MuiOutlinedInput: {
        styleOverrides: {
            root: {
                backgroundColor: ColorStyles.base.white,
                '&.Mui-focused': {
                    '.MuiOutlinedInput-notchedOutline': {
                        // borderColor: color.gray[ 300 ],
                        borderWidth: '1px',
                    },
                },
            },
            notchedOutline: {
                borderColor: ColorStyles.gray[ 300 ],
            },
            input: {
                ...TextStyles.textMd.normal,
                backgroundColor: ColorStyles.base.white,
                color: ColorStyles.gray[ 900 ],
                borderRadius: '4px',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: ColorStyles.gray[ 300 ],
                height: '9px',
            },
        },
    },
    MuiCheckbox: {
        styleOverrides: {
            root: {
                color: ColorStyles.gray[ 300 ],
            },
        },
    },
    MuiFormControlLabel: {
        styleOverrides: {
            label: {
                ...TextStyles.textSm.medium,
                color: ColorStyles.gray[ 700 ],
            },
        },
    },
};

export default components;
