import { Box, experimentalStyled, LinearProgress, linearProgressClasses } from '@mui/material';
import { ColorStyles } from '@theme/Designs';

const BorderLinearProgress = experimentalStyled( LinearProgress )( ( { theme } ) => ( {
    height: 8,
    borderRadius: 5,
    [ `&.${ linearProgressClasses.colorPrimary }` ]: {
        backgroundColor: ColorStyles.primary[ 100 ],
    },
    [ `& .${ linearProgressClasses.bar }` ]: {
        borderRadius: 5,
        backgroundColor: ColorStyles.primary[ 600 ],
    },
} ) );

function Progressbar( { value } ) {
    return (
        <Box width={"100%"} px ={1} >
            <BorderLinearProgress variant="determinate" value={ value } />
        </Box>
    );
};

export default Progressbar;
