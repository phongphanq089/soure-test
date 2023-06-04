import verifyCsrfToken from "@components/verifyCsrfToken";

import axiosClient from "@configs/axios";
import { roles } from "@configs/sites";
import _ from "lodash";
const handler = async ( req, res ) => {
    if ( req.method === 'POST' ) {
        // if ( !verifyCsrfToken( req.body.csrfToken ) ) return;
        try {
            const isCsrfValid = await verifyCsrfToken( req );
            // console.log( isCsrfValid );
            if ( isCsrfValid ) {
                _.unset( req.body, 'csrfToken' );
                _.set( req.body, 'role_id', roles.consumer );
                const register = await axiosClient.post( `/users/register`, req.body );
                // console.log( register );
                res.status( 200 ).send( register );
                //"Csrf Token not valid."
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

