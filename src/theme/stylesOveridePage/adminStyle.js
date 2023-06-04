import { ColorStyles, TextStyles } from "../Designs";
import { MediaBreakpoints, Theme } from "../MediaBreakpoints";

export const adminSyle = {
    '._admin': {
        // custom select MuiInput
        '.MuiFormControl-root': {
            width: '100%',
            '.MuiInputBase-root': {
                '.MuiInputBase-input': {
                    padding: '20px 14px',
                },
                '.MuiSelect-select': {
                    display: 'flex',
                    alignItems: 'center'
                }
            }
        },

        // show select admin 
        '.show-select-admin': {
            [ MediaBreakpoints( Theme.down.md ) ]: {
                width: '100%',
            },
            backgroundColor: ColorStyles.base.white,
            '.MuiFormControl-root': {
                borderRadius: 0,
                width: 272,
                [ MediaBreakpoints( Theme.down.sm ) ]: {
                    width: '100%',
                },
                '.MuiInputBase-root.show-oder-select': {
                    borderRadius: 5,
                    border: `1px solid ${ ColorStyles.gray[ 700 ] }`,
                    // height: 40,
                    '.MuiSelect-select': {
                        padding: '6px 14px',
                        fontWeight: 500,
                    },
                    '.MuiOutlinedInput-notchedOutline': {
                        borderWidth: 0,
                    },
                    '.MuiSvgIcon-root': {
                        fontSize: '2.5rem',
                        width: 30,
                        height: 30,
                        top: '50%',
                        transform: 'translateY(-50%)',
                    }
                },
            },

        },
        // Overrides MuiButtonGroup-root
        '.MuiButtonGroup-root': {
            display: 'flex',
            gap: 24,
            boxShadow: 'unset !important',
        },
        // menu popper user admin 
        '.menu-popper-admin': {
            '.MuiPaper-root.MuiMenu-paper': {
                width: "350px",
                right: 0,
                top: "70px !important",
                ".MuiList-padding": {
                    padding: "30px",
                    '.MuiButtonBase-root.MuiButton-root': {
                        backgroundColor: ColorStyles.base.black,
                        color: ColorStyles.base.white,
                        marginTop: 24,
                        width: "100%",
                        height: "48px",
                        borderRadius: '0px',
                        ...TextStyles.textSm.medium,
                        '&:hover': {
                            backgroundColor: ColorStyles.success[ 500 ],
                            color: ColorStyles.base.black,
                        },
                    }
                },
            },
        },
        //navbar menu admin
        '.MuiPaper-root.header-navbar-admin': {
            backgroundColor: ColorStyles.base.white,
            '.MuiToolbar-root': {
            }
        },
        // drawer slider menu admin
        '.MuiDrawer-root.menu-left-admin': {
            '.MuiPaper-root': {
                width: 270,
                backgroundColor: ColorStyles.success[ 100 ],
                borderRight: `1px solid ${ ColorStyles.gray[ 400 ] }`,
                [ MediaBreakpoints( Theme.down.downMobileSm ) ]: {
                    width: '100%'
                },
                '.list-menu-left': {
                    position: 'relative',
                    '.icon-click': {
                        position: 'absolute',
                        top: 20,
                        right: 0,
                        borderBottomLeftRadius: 10,
                        borderTopLeftRadius: 10,
                        backgroundColor: ColorStyles.success[ 300 ],
                        '.MuiButtonBase-root.MuiIconButton-root': {
                            padding: 2,
                            borderRadius: 0,
                            color: ColorStyles.base.black,
                        }
                    },
                    '.MuiList-root': {
                        '.list-menu-left-item': {
                            '.MuiListItem-root': {
                                '&.active-router': {
                                    backgroundColor: ColorStyles.success[ 500 ],
                                    borderRadius: 0,
                                    '.MuiTypography-description': {
                                        backgroundColor: ColorStyles.success[ 500 ],
                                    }
                                },
                                padding: '2px 0px',
                                '.MuiButtonBase-root': {
                                    '.MuiListItemIcon-root': {
                                        minWidth: '40px',
                                        color: ColorStyles.base.black,
                                    },
                                    '.MuiListItemText-root': {
                                        '.MuiTypography-root': {
                                            ...TextStyles.textMd.medium,
                                            color: ColorStyles.base.black,
                                        }
                                    }
                                }
                            },
                            '.menu-children': {
                                '.MuiCollapse-wrapper': {
                                    '.MuiCollapse-wrapperInner': {
                                        '.MuiList-root': {
                                            '.MuiListItem-root': {
                                                a: {
                                                    width: '100%',
                                                    '.MuiButtonBase-root': {
                                                        width: '100%',
                                                        paddingLeft: 30,
                                                        '.MuiListItemText-root': {
                                                            '.MuiTypography-root': {
                                                                ...TextStyles.textMd.medium,
                                                                color: ColorStyles.base.black,
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            '.MuiPaper-root.MuiDrawer-paper::-webkit-scrollbar-thumb': {
                backgroundColor: ColorStyles.success[ 500 ],
                borderRadius: 6,
            },
            '.MuiPaper-root.MuiDrawer-paper::-webkit-scrollbar': {
                width: 4,
            },
        },
        // custom color paper-root
        '.MuiPaper-root': {
            '.MuiList-root': {
                '.MuiButtonBase-root.MuiMenuItem-root': {
                    color: ColorStyles.base.black,
                }
            }
        },
        '.MuiPaper-root': {
            '.MuiList-root': {
                '.MuiButtonBase-root': {
                    ...TextStyles.textSm.medium,
                    color: ColorStyles.base.black,
                    '&:hover': {
                        backgroundColor: ColorStyles.success[ 500 ]
                    },
                    '&.Mui-selected': {
                        backgroundColor: ColorStyles.success[ 500 ]
                    },
                },
            }
        },
        '#admin': {
            '.MuiFormGroup-root.row': {
                flexDirection: "row",
            },
            '.MuiFormGroup-root': {
                '.MuiFormControlLabel-root': {
                    '.MuiButtonBase-root': {
                        '.MuiTypography-root': {
                            ...TextStyles.textSm.medium,
                            color: ColorStyles.gray[ 900 ],
                        }
                    }
                }
            },
            // list manage product
            '.content-admin': {
                '.container-page': {
                    '.MuiPaper-root': {
                        '.MuiTableContainer-root': {
                            '.MuiTableHead-root': {
                                '.MuiTableRow-root': {
                                    '.MuiTableCell-root': {
                                        '.MuiButtonBase-root': {
                                            ...TextStyles.textMd.medium
                                        }
                                    }
                                }
                            },
                            '.MuiTable-root': {
                                '.MuiTableBody-root': {
                                    '.MuiTableRow-root': {
                                        '.MuiTableCell-root': {
                                            padding: '0px 16px !important',
                                            [ MediaBreakpoints( Theme.down.md ) ]: {
                                                whiteSpace: "nowrap",
                                            },
                                            '.MuiTypography-root ': {
                                                ...TextStyles.textMd.medium
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        '.MuiTablePagination-root': {
                            '.MuiTablePagination-selectLabel': {
                                color: ColorStyles.base.black,
                            },
                            '.MuiInputBase-root': {
                                ...TextStyles.textMd.medium,
                                // color: ColorStyles.base.black,
                                color: ColorStyles.base.black,
                            },
                            '.MuiTablePagination-displayedRows': {
                                ...TextStyles.textMd.medium,
                                //  color: ColorStyles.base.black,
                                color: ColorStyles.base.black,
                            },
                            '.MuiTablePagination-actions': {
                                '.MuiButtonBase-root': {
                                    svg: {
                                        //  color: ColorStyles.base.black,
                                        color: ColorStyles.base.black,
                                    }
                                }
                            }
                        }
                    },
                    // tree view  page libary
                    '.page-libary': {
                        '.MuiGrid-root.MuiGrid-item': {
                            '.render-image': {
                                padding: 32,
                                backgroundColor: ColorStyles.base.white,
                                '.render-image-item': {
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
                                    gap: 20,
                                    [ MediaBreakpoints( Theme.down.md ) ]: {
                                        gridTemplateColumns: '1fr 1fr 1fr',
                                    },
                                    [ MediaBreakpoints( Theme.down.md ) ]: {
                                        gridTemplateColumns: '1fr 1fr',
                                    },
                                },
                                '.no-data-image': {
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }
                            },
                            '.list-menu-folder': {
                                backgroundColor: ColorStyles.base.white,
                                '.actions-folder': {
                                    backgroundColor: ColorStyles.success[ 50 ]
                                }
                            }
                        },
                        '.btn-add': {
                            width: 50,
                            height: 50,
                            backgroundColor: ColorStyles.success[ 500 ],
                            ":hover": {
                                backgroundColor: ColorStyles.success[ 500 ],
                            }
                        },
                        '.btn-edit': {
                            width: 50,
                            height: 50,
                            backgroundColor: ColorStyles.success[ 300 ],
                            ":hover": {
                                backgroundColor: ColorStyles.success[ 300 ],
                            }
                        },
                        '.btn-deleted': {
                            width: 50,
                            height: 50,
                            backgroundColor: ColorStyles.error[ 400 ],
                            ":hover": {
                                backgroundColor: ColorStyles.error[ 400 ],
                            }
                        },
                        '.btn-upload': {
                            borderRadius: '7px',
                            height: 30,
                            color: ColorStyles.base.black,
                            backgroundColor: ColorStyles.success[ 500 ],
                            ":hover": {
                                backgroundColor: ColorStyles.success[ 500 ],
                            }
                        },
                        '.MuiTreeView-root.tree-view-page-libary': {
                            margin: 20,
                            '.MuiTreeItem-root': {
                                '.MuiTreeItem-content': {
                                    padding: '16px 8px',
                                    borderBottom: `1px solid ${ ColorStyles.gray[ 300 ] }`,
                                    ' &.Mui-selected': {
                                        backgroundColor: ColorStyles.success[ 500 ]
                                    },
                                    '.MuiTreeItem-label': {
                                        ...TextStyles.textMd.medium,
                                        color: ColorStyles.base.black,
                                    }
                                },
                                '.MuiCollapse-root': {
                                    'MuiCollapse-wrapper': {
                                        '.MuiCollapse-wrapperInner': {
                                            '.MuiTreeItem-root': {
                                                '.MuiTreeItem-iconContainer': {
                                                    '.MuiTreeItem-label': {
                                                        ...TextStyles.textMd.medium,
                                                        color: ColorStyles.base.black,
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                },
            },

        }
    },

};

