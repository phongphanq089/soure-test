import { Backdrop } from "@mui/material";
import animationData from "@public/loading.json";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";

const Loading = ( { loadSite } ) => {
  const router = useRouter();
  const [ loading, setLoading ] = useState( loadSite ? loadSite : false );

  useEffect( () => {
    const handleStart = ( url ) => {
      url !== router.pathname ? setLoading( true ) : setLoading( false );
    };
    const handleComplete = ( url ) => setLoading( false );

    router.events.on( "routeChangeStart", handleStart );
    router.events.on( "routeChangeComplete", handleComplete );
    router.events.on( "routeChangeError", handleComplete );
    // When the component unmounts, unsubscribe from the router events with the `off` method
    return () => {
      router.events.off( "routeChangeStart", handleStart );
      router.events.off( "routeChangeComplete", handleComplete );
      router.events.off( "routeChangeError", handleComplete );
    };
  }, [ router ] );

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Backdrop
      sx={ {
        color: "#fff",
        backgroundColor: "#ffffff",
        zIndex: ( theme ) => theme.zIndex.drawer + 1,
      } }
      open={ loading }
    >
      <Lottie options={ defaultOptions } height={ 500 } width={ 500 } />
    </Backdrop>
  );
};

export default Loading;
