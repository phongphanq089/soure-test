const crypto = require( 'crypto' );
// import { createHash } from "crypto";
/**
 * Verify that the token you want to check matches the token in the next-auth cookie
 *
 * Note this verify check has been created based on the code within next-auth: ^3.1.0 future
 * versions might differ
 *
 * @param req
 * @param tokenToCheck
 * @return boolean
 */
const verifyCsrfToken = async ( req, tokenToCheck ) => {
  const secret = process.env.NEXTAUTH_SECRET;
  const csrfMethods = [ "POST", "PUT", "PATCH", "DELETE" ];
  if ( tokenToCheck === undefined ) {
    tokenToCheck = req.body.csrfToken
      ? req.body.csrfToken.toString()
      : undefined;
  }
  if ( !csrfMethods.includes( req.method ) ) {
    // we dont need to check the CSRF if it's not within the method.
    return true;
  }
  try {
    const useSecureCookies = process.env.NEXTAUTH_URL.startsWith( "https://" );
    const csrfProp = `${ useSecureCookies ? "__Host-" : "" }next-auth.csrf-token`;
    if ( req.cookies[ csrfProp ] ) {
      const cookieValue = req.cookies[ csrfProp ];
      const cookieSplitKey = cookieValue.match( "|" ) ? "|" : "%7C";
      const [ csrfTokenValue, csrfTokenHash ] = cookieValue.split( cookieSplitKey );
      // csrfTokenValue  4f04aa866d496a25e847ae1cad9c5bfb0551d5532438bb1c3ce2c3149c8be2e2 : 
      //  csrfTokenHash 860412d3d492e66bd5c89aa816f6db5cf7cd21087a8cb3eb27a89be39402bb54;  
      const generatedHash = crypto.createHash( "sha256" ).update( `${ tokenToCheck }${ secret }` ).digest( "hex" );
      if ( csrfTokenHash === generatedHash ) {
        // If hash matches then we trust the CSRF token value
        if ( csrfTokenValue === tokenToCheck ) return true;
      }
    }
    return false;
  } catch ( error ) {
    return false;
  }
};
export default verifyCsrfToken;
