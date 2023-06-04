import { Box, Container } from '@mui/material';
import { ColorStyles } from '@theme/Designs';
import Image from 'next/image';

const BlockContent = ( { children } ) => {
    return (
        <Box sx={ { backgroundColor: ColorStyles.primary[ 900 ], position: "relative" } }>
            <Box className="ImageHome_rigth" >
                <Image src={ "/image/line-pattern-right.svg" } width={ 500 } height={ 600 } alt=" pattern-right.svg" />
            </Box>
            <Container sx={ { zIndex: 999, position: 'relative' } }>
                { children }
            </Container>
            <Box className="ImageHome_left" >
                <Image src={ "/image/line-pattern-left.svg" } width={ 700 } height={ 700 } alt="Line pattern-left.svg" />
            </Box>
        </Box>
    );
};

export default BlockContent;