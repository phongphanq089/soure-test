import { ColorStyles } from "@theme/Designs";

const MenuOpen = () => {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="27" height="27" fill="white" />
            <path d="M6.5 14H21.5" stroke="#151515" h="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 9H21.5" stroke="#151515" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 19H21.5" stroke="#151515" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="0.5" y="0.5" width="27" height="27" stroke="#151515" />
        </svg>

    );
};
const MenuClose = () => {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="27" height="27" fill="white" />
            <path d="M19 9L9 19" stroke="#151515" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 9L19 19" stroke="#151515" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="0.5" y="0.5" width="27" height="27" stroke="#151515" />
        </svg>

    );
};
const Loading = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="27" viewBox="0 96 960 960" width="27">
            <path d="M480 896q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720 366V256h80v280H520v-80h168q-32-56-87.5-88T480 336q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z" />
        </svg>
    );
};
const Vector = () => {
    return (
        <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.4955 21.9587C23.0715 21.9587 25.1611 19.8099 25.1611 17.1587C25.1611 14.5091 23.0715 12.3587 20.4955 12.3587C15.8315 12.3587 18.9403 3.08034 25.1611 3.08034L25.1611 0.84034C14.0587 0.838738 9.70833 21.9587 20.4955 21.9587ZM7.05553 21.9587C9.62993 21.9587 11.7195 19.8099 11.7195 17.1587C11.7195 14.5091 9.62993 12.3587 7.05554 12.3587C2.38994 12.3587 5.49874 3.08034 11.7195 3.08034L11.7195 0.840338C0.618736 0.838737 -3.73166 21.9587 7.05553 21.9587Z" fill="#98B71B" />
        </svg>
    );
};

const ShopingCartIcon = ( { icon, fill, color, ...props } ) => {

    props = {
        stroke: color ?? ColorStyles.base.black,
        width: 28,
        height: 28,
        fill: color,
        ...props
    };

    if ( icon === "menu-close" ) return <MenuClose { ...props } />;
    if ( icon === "menu-open" ) return <MenuOpen { ...props } />;
    if ( icon === "loading" ) return <Loading { ...props } />;
    if ( icon === "vector" ) return <Vector { ...props } />;
    return;
};
export default ShopingCartIcon;
