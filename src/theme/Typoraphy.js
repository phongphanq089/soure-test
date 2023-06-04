import { ButtonStyles, ColorStyles, TextStyles } from './Designs';
import { MediaBreakpoints, Theme } from './MediaBreakpoints';
const typography = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 16,
    lineHeight: '28px',
    body1: {
        ...TextStyles.textLg.normal,
        color: ColorStyles.gray[ 500 ],
    },
    h1: {
        fontWeight: 500,
        fontSize: '1.875rem',
        lineHeight: '1.5',
    },
    h2: {
        ...TextStyles.displayXl.bold,
        color: ColorStyles.base.white,
    },
    h3: {
        fontWeight: 500,
        fontSize: '1.3125rem',
        lineHeight: '1.5',
    },
    h4: {
        fontWeight: 500,
        fontSize: '1.125rem',
        lineHeight: '1.5',
    },
    h5: {
        fontWeight: 500,
        fontSize: '1rem',
        lineHeight: '1.5',
    },
    h6: {
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: '1.5',
    },
    heading1: {
        ...TextStyles.displayXl.bold,
        color: ColorStyles.gray[ 900 ],
        [ MediaBreakpoints( Theme.down.sm ) ]: {
            ...TextStyles.displayLg.bold,
        },
        '.quill .ql-container .ql-editor p': {
            textAlign: 'center',
            ...TextStyles.displayXl.bold,
            color: ColorStyles.gray[ 900 ],
            [ MediaBreakpoints( Theme.down.sm ) ]: {
                ...TextStyles.displayLg.bold,
            },
        },
    },
    heading2: {
        ...TextStyles.displayXl.bold,
        color: ColorStyles.base.white,
        [ MediaBreakpoints( Theme.down.sm ) ]: {
            ...TextStyles.displayLg.bold,
        },
        '.quill .ql-container .ql-editor p': {
            textAlign: 'center',
            ...TextStyles.displayXl.bold,
            color: ColorStyles.base.white,
            [ MediaBreakpoints( Theme.down.sm ) ]: {
                ...TextStyles.displayLg.bold,
            },
        },
    },
    body1: {
        ...TextStyles.textSm.medium,
        color: ColorStyles.gray[ 900 ],
    },
    body2: {
        ...TextStyles.displayXs.normal,
        color: ColorStyles.gray[ 900 ],
    },
    body3: {
        ...TextStyles.textLg.medium,
        color: ColorStyles.base.white,
        ' > span': {
            ...TextStyles.textLg.medium,
            color: ColorStyles.base.white,
        },
        a: {
            ...TextStyles.textLg.normal,
            color: ColorStyles.accent[ 500 ],
        },
    },
    body5: {
        ...TextStyles.displayMd.bold,
        color: ColorStyles.gray[ 900 ],
    },
    body6: {
        ...TextStyles.textXl.bold,
        color: ColorStyles.gray[ 900 ],
    },
    body7: {
        ...TextStyles.textMd.normal,
        color: ColorStyles.gray[ 500 ],
    },
    body8: {
        ...TextStyles.textMd.medium,
        color: ColorStyles.gray[ 900 ],
    },
    body9: {
        ...TextStyles.textLg.medium,
        color: ColorStyles.base.white,
        '.quill .ql-container .ql-editor p': {
            textAlign: 'center',
            ...TextStyles.textLg.medium,
            color: ColorStyles.base.white,
        },
    },
    button: {
        textTransform: 'none',
        fontWeight: '400',
    },
    title1: {
        ...TextStyles.textXl.bold,
        color: ColorStyles.base.black
    },
    title2: {
        ...TextStyles.textLg.medium,
        color: ColorStyles.base.black
    },
    title3: {
        ...TextStyles.textMd.bold,
        color: ColorStyles.success[ 500 ]
    },
    title4: {
        ...TextStyles.textMd.bold,
        color: ColorStyles.gray[ 900 ],
        '.quill .ql-container .ql-editor p': {
            textAlign: 'center',
            ...TextStyles.textMd.bold,
            color: ColorStyles.gray[ 900 ],
        },
    },
    title5: {
        ...TextStyles.textSm.medium,
        color: ColorStyles.gray[ 500 ],
        '.quill .ql-container .ql-editor p': {
            textAlign: 'center',
            ...TextStyles.textSm.medium,
            color: ColorStyles.gray[ 500 ],
        },
    },
    title6: {
        ...TextStyles.displayLg.bold,
        color: ColorStyles.gray[ 900 ],
    },
    subtitle1: {
        ...TextStyles.displayXs.normal,
        color: ColorStyles.base.white,
        span: {
            color: ColorStyles.accent[ 500 ],
        },
    },
    subtitle2: {
        ...TextStyles.displayXs.normal,
        color: ColorStyles.gray[ 500 ],
        span: {
            color: ColorStyles.primary[ 900 ],
        },
    },
    subtitle3: {
        ...TextStyles.displayXs.normal,
        color: ColorStyles.gray[ 500 ],
        ' span': {
            color: ColorStyles.success[ 900 ],
        },
    },
    subtitle4: {
        ...TextStyles.textXl.normal,
        color: ColorStyles.gray[ 900 ],
        'span': {
            color: ColorStyles.accent[ 500 ],
        },
    },
    subtitle5: {
        ...TextStyles.displayXs.normal,
        color: ColorStyles.gray[ 500 ],
        ' span': {
            color: ColorStyles.success[ 700 ],
        },
    },
    text1: {
        ...TextStyles.textSm.normal,
        color: ColorStyles.gray[ 500 ],
        span: {
            ...TextStyles.textMd.medium,
            marginRight: "3px",
            color: ColorStyles.primary[ 900 ],
        },
    },
    text2: {
        ...TextStyles.textMd.medium,
        color: ColorStyles.gray[ 700 ],
    },
    text3: {
        ...TextStyles.textLg.medium,
        color: ColorStyles.gray[ 900 ],
    },
    text4: {
        ...TextStyles.textSm.medium,
        color: ColorStyles.gray[ 900 ],
    },
    text5: {
        ...TextStyles.textSm.medium,
        color: ColorStyles.gray[ 700 ],
    },
    text6: {
        ...TextStyles.textMd.medium,
        color: ColorStyles.base.white,
        a: {
            color: ColorStyles.success[ 500 ],
        }
    },
    description: {
        ...TextStyles.displayXs.normal,
        color: ColorStyles.gray[ 900 ],
        '.quill .ql-container .ql-editor p': {
            ...TextStyles.displayXs.normal,
            color: ColorStyles.gray[ 900 ],
        }
    },
    description1: {
        ...TextStyles.textLg.normal,
        color: ColorStyles.gray[ 500 ],
        '.quill .ql-container .ql-editor p': {
            ...TextStyles.textLg.normal,
            color: ColorStyles.gray[ 500 ],
        }
    },
    description2: {
        ...TextStyles.displayXs.normal,
        color: ColorStyles.gray[ 500 ],
        'span': {
            color: ColorStyles.success[ 500 ],
            ...TextStyles.displayXs.normal,
        },
        '.quill .ql-container .ql-editor p': {
            textAlign: 'center',
            ...TextStyles.displayXs.normal,
            color: ColorStyles.gray[ 500 ],
        },
    },
    description3: {
        ...TextStyles.displayXs.normal,
        color: ColorStyles.base.white,
        'span': {
            color: ColorStyles.accent[ 500 ],
        },
        '.quill .ql-container .ql-editor p': {
            textAlign: 'center',
            ...TextStyles.displayXs.normal,
            color: ColorStyles.base.white,
        },
    },
    description4: {
        ...TextStyles.textMd.normal,
        color: ColorStyles.gray[ 900 ],
        '.quill .ql-container .ql-editor p': {
            textAlign: 'center',
            ...TextStyles.textMd.normal,
            color: ColorStyles.gray[ 900 ],
        },
    },
    banner: {
        ...TextStyles.displayLg.bold,
        color: ColorStyles.gray[ 900 ],
        [ MediaBreakpoints( Theme.down.sm ) ]: {
            ...TextStyles.displayMd.bold,
        },
        'span': {
            color: ColorStyles.primary[ 400 ],
            [ MediaBreakpoints( Theme.down.sm ) ]: {
                ...TextStyles.displayMd.bold,
            },
        },
        '.quill .ql-container .ql-editor p': {
            ...TextStyles.displayLg.bold,
            color: ColorStyles.gray[ 900 ],
            [ MediaBreakpoints( Theme.down.sm ) ]: {
                ...TextStyles.displayMd.bold,
            },
        }
    },

    readmore: {
        ...ButtonStyles.linkgray.default,
        ...TextStyles.textLg.medium,
        ':hover': {
            ...ButtonStyles.linkgray.hover,
        },
        ':disabled': {
            ...ButtonStyles.linkgray.disabled,
        },
    },
    bannerQuill: {
        ...TextStyles.displayLg.bold,
        color: ColorStyles.gray[ 900 ],
        'span': {
            color: ColorStyles.primary[ 400 ],
        },
        '.quill .ql-container': {
            minHeight: 'unset',
        },
        '.ql-editor, .ql-snow * ': {
            ...TextStyles.displayLg.bold,
            color: ColorStyles.gray[ 900 ],
        },
        '.ql-editor .ql-size-small': {
            fontSize: 'inherit ',
        },
    },
    body1Quill: {
        '.ql-editor, .ql-snow * ': {
            ...TextStyles.textLg.normal,
            color: ColorStyles.gray[ 500 ],
        },
        '.quill .ql-container': {
            minHeight: 'unset',
        },
        '.quill .ql-container .ql-editor ': {
            padding: '0',
        },
    },
    body2Quill: {
        ...TextStyles.displayXs.normal,
        '.ql-editor, .ql-snow * ': {
            ...TextStyles.displayXs.normal,
            color: ColorStyles.gray[ 900 ],
        },
        '.quill .ql-container': {
            minHeight: 'unset',
        },
        '.quill .ql-container .ql-editor ': {
            padding: '0',
        },
    },
    body3Quill: {
        '.quill .ql-container .ql-editor': {
            textAlign: 'center',
            padding: '0',
        },
        '.ql-editor, .ql-snow * ': {
            ...TextStyles.textLg.medium,
            color: ColorStyles.base.white,
        },
        '.quill .ql-container': {
            minHeight: 'unset',
        },
    },
    body4Quill: {
        '.quill .ql-container .ql-editor': {
            textAlign: 'center',
        },
        '.ql-editor, .ql-snow * ': {
            ...TextStyles.textMd.bold,
            color: ColorStyles.gray[ 900 ],
        },
        '.quill .ql-container': {
            minHeight: 'unset',
        },
    },
    body5Quill: {
        '.ql-editor, .ql-snow * ': {
            ...TextStyles.displayMd.bold,
            color: ColorStyles.gray[ 900 ],
        },
        '.quill .ql-container': {
            minHeight: 'unset',
        },
        '.quill .ql-container .ql-editor ': {
            padding: '10px 0',
        },
    },
    body6Quill: {
        '.ql-editor, .ql-snow * ': {
            ...TextStyles.textXl.bold,
            color: ColorStyles.gray[ 900 ],
        },
        '.quill .ql-container': {
            minHeight: 'unset',
        },
        '.quill .ql-container .ql-editor ': {
            padding: '1px 0',
        },
        '.quill .ql-container .ql-editor': {
            textAlign: 'center',
        },
    },
    body7Quill: {
        '.ql-editor, .ql-snow * ': {
            ...TextStyles.textMd.normal,
            color: ColorStyles.gray[ 500 ],
        },
        '.quill .ql-container': {
            minHeight: 'unset',
        },
        '.quill .ql-container .ql-editor ': {
            padding: '1px 0',
        },
        '.quill .ql-container .ql-editor': {
            textAlign: 'center',
        },
    },
    h2Quill: {
        '.ql-editor, .ql-snow * ': {
            ...TextStyles.displayXl.bold,
            color: ColorStyles.base.white,
        },
        '.quill .ql-container': {
            minHeight: 'unset',
        },
        '.quill .ql-container .ql-editor': {
            textAlign: 'center',
        },
    },
    h2Quillbold: {
        '.ql-editor, .ql-snow * ': {
            ...TextStyles.displayXl.bold,
            color: ColorStyles.gray[ 900 ],
        },
        '.quill .ql-container': {
            minHeight: 'unset',
        },
        '.quill .ql-container .ql-editor': {
            textAlign: 'center',
            marginBottom: '24px',
        },
    },
    subtitle1Quill: {
        ...TextStyles.displayXs.normal,
        color: ColorStyles.base.white,
        span: {
            color: ColorStyles.accent[ 500 ],
        },
        '.quill .ql-container .ql-editor': {
            textAlign: 'center',
        },
        '.ql-editor, .ql-snow * ': {
            ...TextStyles.displayXs.normal,
            color: ColorStyles.base.white,
        },
        '.ql-editor .ql-size-small': {
            fontSize: 'inherit ',
        },
    },
    subtitle2Quill: {
        span: {
            color: ColorStyles.primary[ 900 ],
        },
        '.quill .ql-container .ql-editor': {
            textAlign: 'center',
        },
        '.ql-editor, .ql-snow * ': {
            ...TextStyles.displayXs.normal,
            color: ColorStyles.gray[ 700 ],
        },
        '.ql-editor .ql-size-small': {
            fontSize: 'inherit ',
        },
    },
    subtitle3Quill: {
        ' span': {
            color: ColorStyles.success[ 900 ],
        },
        '.quill .ql-container .ql-editor': {
            textAlign: 'center',
        },
        '.ql-editor, .ql-snow * ': {
            ...TextStyles.displayXs.normal,
            color: ColorStyles.gray[ 500 ],
        },
        '.ql-editor .ql-size-small': {
            fontSize: 'inherit ',
        },
    },
};

export default typography;
