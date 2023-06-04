import verifyCsrfToken from "@components/verifyCsrfToken";

import axiosClient from "@configs/axios";
import _ from "lodash";
const handler = async ( req, res ) => {
    if ( req.method === 'POST' ) {
        // if ( !verifyCsrfToken( req.body.csrfToken ) ) return;
        try {
            const isCsrfValid = await verifyCsrfToken( req );
            // console.log( isCsrfValid );
            if ( isCsrfValid ) {
                _.unset( req.body, 'csrfToken' );
                const reset = await axiosClient.post( `/users/reset-password`, req.body );
                res.status( 200 ).json( reset );
            } else {
                res.status( 200 ).send( { msg: "Csrf Token not valid." } );
            }
        } catch ( err ) {
            res.status( 500 ).send( { msg: 'failed to fetch data ' + err } );
        }
    } else {
        res.status( 500 ).send( { msg: 'Method error.' } );
    }
};

export const config = {
    api: {
        bodyParser: true,
    },
};
export default handler;

