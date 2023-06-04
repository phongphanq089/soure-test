import axiosClient from "../../../../src/configs/axios";

export default async function handler( req, res ) {
    try {
        const checkCode = await axiosClient.get( `/users/check-active-code/${ req.query[ 'active_code' ] }` );
        res.status( 200 ).json( checkCode );
    } catch ( err ) {
        res.status( 500 ).send( { error: 'failed to fetch data' } );
    }
}