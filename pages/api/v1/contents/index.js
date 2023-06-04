import axiosClient from "@configs/axios";

/**
 * API get contents list
 * @param {object} req Request
 * @param {object} res Respone
 * @param {boolean} is_search Get By Search. Default: false
 * @param {string} keyword Keyword for search when is_search: true.  Default: ''
 * @param {string / array} categories Get By Categories. Default: ''
 * @param {boolean} is_paging Paging for contents. Default: false
 * @param {int} limit number for query contents. Default: 10
 * @param {string} order Order contents. Default: DESC
 * @param {string} order_by field for order. Default: id
 * @returns {object} contents Content list
 * contents: { id, name, slug, description, image, gellery, attributes, categories, types, created, modified }
 * contents.gellery: { id, image }
 * contents.attributes: { id, name, slug, type, options }
 * contents.categories: { id, name, slug }
 * contents.types: { id, name, slug }
 */

export default async function handler( req, res ) {
    try {
        const contents = await axiosClient.get( "/contents", {
            params: {
                ...req.query
            }
        } );
        res.status( 200 ).json( contents );
    } catch ( err ) {
        res.status( 500 ).send( { error: err } );
    }
}