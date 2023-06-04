import apiConfig from './api';
const axios = require( 'axios' );

const axiosClient = axios.create( {
    headers: {
        'Content-Type': 'application/json'
    }
} );
// Add a request interceptor
axiosClient.interceptors.request.use( function ( config ) {
    // Do something before request is sent
    if ( config.url.indexOf( '@' ) > -1 ) {
        config.url = config.url.replace( '@', '' );
        config.baseURL = apiConfig.localUrl;
    } else {
        config.baseURL = apiConfig.serverUrl;
        config.headers[ 'access-key' ] = apiConfig.secretKey;
    }

    if ( [ 'post', 'put', 'delete' ].includes( config.method ) ) {
        delete config.headers[ 'Accept' ];
        config.headers[ 'Content-Type' ] = 'application/x-www-form-urlencoded';
    }

    return config;
}, function ( error ) {
    // Do something with request error
    return Promise.reject( error );
} );

// Add a response interceptor
axiosClient.interceptors.response.use( function ( response ) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function ( error ) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject( error );
} );

export default axiosClient;