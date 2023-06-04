/* eslint-disable react-hooks/exhaustive-deps */
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useAuth( shouldRedirect ) {
  const session = useSession();
  const router = useRouter();
  const [ isAuthenticated, setIsAuthenticated ] = useState( false );
  // const { data: session, status } = useSession();

  useEffect( () => {
    if ( session?.error === "RefreshAccessTokenError" ) {
      signOut( { callbackUrl: "/login", redirect: shouldRedirect } );
    }

    if ( session === undefined ) {
      if ( router.route !== "/login" ) {
        router.replace( "/login" );
      }
      setIsAuthenticated( false );
    } else if ( session.status === "authenticated" ) {
      if ( router.route === "/login" ) {
        loginRedirect( session.data.user.role.slug, router );
      }
      setIsAuthenticated( true );
    }
  }, [ session ] );

  return isAuthenticated;
}

const loginRedirect = ( role, router ) => {
  switch ( role ) {
    case "seller":
      router.replace( "/admin" );
      break;
    case "dealer":
      router.replace( "/dealer" );
      break;
    case "admin":
      router.replace( "/admin" );
      break;
    default:
      router.replace( "/" );
  }
};
