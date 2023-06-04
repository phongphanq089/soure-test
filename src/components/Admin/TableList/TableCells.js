import { Box, TableCell, Typography } from "@mui/material";
import { ColorStyles } from "@theme/Designs";
import Dayjs from "dayjs";
import { Check, X } from "feather-icons-react/build/IconComponents";
import _ from "lodash";
import Image from "next/image";

function TableCells( { row, cell, children } ) {

    if ( cell === 'excerpt' || cell === 'description' ) {
        // Display Multiple Text Line
        return (
            <TableCell>
                <Typography variant="description7">
                    { _.truncate( row[ cell ], { length: 30 } ) }
                </Typography>
            </TableCell>
        );
    }

    // Display cell Boolean
    if ( cell === 'status' || cell === 'featured' ) {
        return (
            <TableCell align="center">
                { Boolean( row[ cell ] ) ? <Check color={ ColorStyles.success[ 400 ] } /> : <X color={ ColorStyles.error[ 400 ] } /> }
            </TableCell>
        );
    };

    // Display cell Image
    if ( cell === 'image' ) {
        return (
            <Box maxWidth="60px" minHeight="60px" display="flex" alignItems="center">
                <Image src={ row[ cell ] }
                    alt={ row.name || row.title || row.slug || '' }
                    width={ 60 }
                    height={ 60 }
                    style={ { width: "100%", height: "100%" } } />
            </Box>
        );
    }

    // Display cell Date or Datetime
    if ( cell === 'created' || cell === 'modified' ) {
        return <TableCell><Typography variant="description7">{ Dayjs( row[ cell ] ).format( 'YYYY-MM-DD' ) }</Typography></TableCell>;
    }

    // Display cell Text
    return <TableCell>{ children }</TableCell>;
}

export default TableCells;
