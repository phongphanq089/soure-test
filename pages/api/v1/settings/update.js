import axiosClient from "@configs/axios";

export default async function handler( req, res ) {
    try {
        const settings = await axiosClient.post( "/settings/update", { setting: req.body.setting } );
        res.status( 200 ).json( settings );
    } catch ( err ) {
        res.status( 500 ).send( { error: err } );
    }
}

export const config = {
    api: {
        bodyParser: true,
    },
};