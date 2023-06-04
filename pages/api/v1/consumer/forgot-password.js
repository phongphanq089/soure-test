import verifyCsrfToken from "@components/verifyCsrfToken";
import axiosClient from "@configs/axios";
import _ from "lodash";
const handler = async ( req, res ) => {
    if ( req.method === 'POST' ) {
        try {
            const isCsrfValid = await verifyCsrfToken( req );
            if ( isCsrfValid ) {
                _.unset( req.body, 'csrfToken' );
                const forgot = await axiosClient.post( `users/forgot-password`, req.body );
                res.status( 200 ).send( forgot );
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

