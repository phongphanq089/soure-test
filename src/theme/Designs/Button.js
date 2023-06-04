import { ColorStyles } from './Color';
import { TextStyles } from './Text';

export const ButtonStyles = {
    primary: {
        default: {
            backgroundColor: ColorStyles.accent[ 500 ],
            color: ColorStyles.primary[ 900 ],
            ...TextStyles.textMd.medium,
        },
        hover: {
            backgroundColor: ColorStyles.accent[ 600 ],
            color: ColorStyles.primary[ 900 ],
            cursor: 'pointer',
        },
        disabled: {
            backgroundColor: ColorStyles.gray[ 200 ],
            color: ColorStyles.primary[ 400 ],
            cursor: 'not-allowed',
        },
        iconLeading: {
            paddingLeft: '10px',
        },
        iconTrailling: {
            paddingRight: '10px',
        },
    },
    secondary: {
        default: {
            border: `1px solid ${ ColorStyles.gray[ 300 ] }`,
            backgroundColor: ColorStyles.base.white,
            color: `${ ColorStyles.gray[ 700 ] }!important`,
            ...TextStyles.textMd.medium,
        },
        hover: {
            backgroundColor: ColorStyles.gray[ 100 ],
            border: `1px solid ${ ColorStyles.gray[ 300 ] }`,
            color: `${ ColorStyles.gray[ 700 ] }!important`,
            cursor: 'pointer',
            ...TextStyles.textMd.medium,
        },
        disabled: {
            backgroundColor: ColorStyles.base.white,
            border: `1px solid ${ ColorStyles.gray[ 300 ] }`,
            color: `${ ColorStyles.gray[ 700 ] }!important`,
            cursor: 'not-allowed',
            ...TextStyles.textMd.medium,
        },
    },
    tertiary: {
        default: {
            backgroundColor: ColorStyles.base.white,
            color: `${ ColorStyles.gray[ 500 ] }!important`,
            ...TextStyles.textMd.medium,
        },
        hover: {
            backgroundColor: ColorStyles.gray[ 100 ],
            color: `${ ColorStyles.gray[ 600 ] }!important`,
            cursor: 'pointer',
            ...TextStyles.textMd.medium,
        },
        disabled: {
            backgroundColor: ColorStyles.base.white,
            color: `${ ColorStyles.gray[ 300 ] }!important`,
            cursor: 'not-allowed',
            ...TextStyles.textMd.medium,
        },
    },
    linkgray: {
        default: {
            backgroundColor: ColorStyles.base.white,
            color: `${ ColorStyles.gray[ 500 ] }!important`,
            ...TextStyles.textMd.medium,
        },
        hover: {
            backgroundColor: ColorStyles.base.white,
            color: `${ ColorStyles.gray[ 900 ] }!important`,
            cursor: 'pointer',
        },
        disabled: {
            backgroundColor: ColorStyles.base.white,
            color: `${ ColorStyles.gray[ 300 ] }!important`,
            cursor: 'not-allowed',
        },
        iconLeading: {
            paddingLeft: '10px',
        },
        iconTrailling: {
            paddingRight: '10px',
        },
    },
};
