import { experimentalStyled } from '@mui/material';
import { ColorStyles } from '@theme/Designs';

export const MainWrapper = ( { children, ...props } ) => {
    const Main = experimentalStyled( 'div' )( ( { theme } ) => ( {
        minHeight: '100vh',
        overflow: 'hidden',
        width: '100%',
        margin: 'auto',
        ...props
    } ) );
    return <Main className="layout-front">{ children }</Main>;
};
export const MainAdmin = ( { children, ...props } ) => {
    const Main = experimentalStyled( 'div' )( ( { theme } ) => ( {
        minHeight: '100vh',
        overflow: 'hidden',
        width: '100%',
        margin: 'auto',
        ...props
    } ) );
    return <Main id="admin">{ children }</Main>;
};
export const WrapperAdmin = ( { children, ...props } ) => {
    const MainPage = experimentalStyled( 'div' )( ( { theme } ) => ( {
        overflow: 'hidden',
        minHeight: '100vh',
        paddingTop: 100,
        width: '100%',
        backgroundColor: ColorStyles.gray[ 200 ],
        ...props
    } ) );
    return <MainPage className="content-admin">{ children }</MainPage>;
};
export const ContainerAdmin = ( { children, ...props } ) => {
    const ConainerPage = experimentalStyled( 'div' )( ( { theme } ) => ( {
        padding: '0px 16px',
        ...props
    } ) );
    return <ConainerPage className='container-page'>{ children }</ConainerPage>;
};
export const ContentAdmin = ( { children, ...props } ) => {
    const ContentPage = experimentalStyled( 'div' )( ( { theme } ) => ( {
        marginBottom: 64,
        ...props
    } ) );
    return <ContentPage  >{ children }</ContentPage>;
};

export const PageWrapper = ( { children, ...props } ) => {
    const MainPage = experimentalStyled( 'div' )( ( { theme } ) => ( {
        flex: '1 1 auto',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.default,
        [ theme.breakpoints.up( 'lg' ) ]: {
            paddingTop: '64px',
            width: '100%'
        },
        [ theme.breakpoints.down( 'lg' ) ]: {
            paddingTop: '64px',
            width: "100%"
        },
        ...props
    } ) );
    return <MainPage>{ children }</MainPage>;
};

export const BlockMenuTop = ( { children, ...props } ) => {
    const BlockMenu = experimentalStyled( "div" )( ( { theme } ) => ( {
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 30px -20px, rgba(0, 0, 0, 0.3) 0px 8px 20px -20px",
        ...props
    } ) );
    return <BlockMenu>{ children }</BlockMenu>;
};

export const PageDealer = ( { children, ...props } ) => {
    const MainPagedealer = experimentalStyled( 'div' )( ( { theme } ) => ( {
        backgroundColor: theme.palette.background.default,
        [ theme.breakpoints.up( 'lg' ) ]: {
            paddingTop: '64px',
            width: '100%'

        },
        [ theme.breakpoints.down( 'lg' ) ]: {
            paddingTop: '64px',
            width: "100%",

        },
        ...props
    } ) );
    return <MainPagedealer>{ children }</MainPagedealer>;
};