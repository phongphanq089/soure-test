
/**
 * API get content detail
 * @param {object} req Request
 * @param {object} res Respone
 * @param {boolean} slug Get By Content.
 * @param {string / array} fields Display all field. Default: '' or false
 * @returns {object} content Content Info
 * fields: { id, name, slug, description, image, categories, types, meta_field, created, modified }
 * content.meta_field: { defind_field }
 */

export default async function handler( req, res ) {
    try {
        if ( req.query[ 'slug' ].length > 0 && req.query[ 'type' ].length > 0 ) {
            const content = await axiosClient.get( "/contents/" + req.query[ 'type' ][ 0 ] + '/' + req.query[ 'slug' ][ 0 ], {
                params: {
                    ...req.query
                }
            } );
            res.status( 200 ).json( content );
        } else {
            res.status( 200 ).json( {} );
        }
    } catch ( err ) {
        res.status( 500 ).send( { error: err } );
    }
}