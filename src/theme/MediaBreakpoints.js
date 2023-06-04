import breakpoints from "./Breakpoints";

export const Theme = {
    down: {
        downMobileSm: "maxWidth: mobileSm",
        sm: "maxWidth:sm",
        md: "maxWidth:md",
        lg: "maxWidth:lg",
        xl: "maxWidth:xl"
    },
    up: {
        xs: "minWidth:xs",
        sm: "minWidth:sm",
        md: "minWidth:md",
        lg: "minWidth:lg",
        xl: "minWidth:xl"
    },
    between: {
        "min:sm-max:md": "minwidth:sm and maxWidth:md"
    }
};
const downMobileSm = `@media(max-width: 390px)`;
const downSm = `@media(max-width: ${ breakpoints.values.sm }px)`;
const downMd = `@media(max-width: ${ breakpoints.values.md }px)`;
const downLg = `@media(max-width: ${ breakpoints.values.lg }px)`;
const downXl = `@media(max-width: ${ breakpoints.values.xl }px)`;
const upXs = `@media(min-width: ${ breakpoints.values.xs }px)`;
const upSm = `@media(min-width: ${ breakpoints.values.sm }px)`;
const upMd = `@media(min-width: ${ breakpoints.values.md }px)`;
const upLg = `@media(min-width: ${ breakpoints.values.lg }px)`;
const upXl = `@media(min-width: ${ breakpoints.values.xl }px)`;
const upSm_downMd = `@media(min-width: ${ breakpoints.values.sm }px) and @media(max-width: ${ breakpoints.values.md }px)`;

export const MediaBreakpoints = ( theme ) => {

    if ( theme === Theme.down.downMobileSm ) return downMobileSm;
    if ( theme === Theme.down.sm ) return downSm;
    if ( theme === Theme.down.md ) return downMd;
    if ( theme === Theme.down.lg ) return downLg;
    if ( theme === Theme.down.xl ) return downXl;
    if ( theme === Theme.up.xs ) return upXs;
    if ( theme === Theme.up.sm ) return upSm;
    if ( theme === Theme.up.md ) return upMd;
    if ( theme === Theme.up.lg ) return upLg;
    if ( theme === Theme.up.xl ) return upXl;
    if ( theme === Theme.between[ "min:sm-max:md" ] ) return upSm_downMd;
    return;
};
