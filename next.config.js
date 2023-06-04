const path = require( 'path' );
module.exports = ( phase, { defaultConfig } ) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        /* config options here */
        reactStrictMode: false,
        staticPageGenerationTimeout: 120,
        images:
        {
            domains: [ process.env.HTTP_DOMAIN, "dealershipone.com" ]
        },
        webpack: ( config ) => {
            config.resolve.alias[ '@components' ] = path.join( __dirname, 'src/components' );
            return config;
        },
        env: {
            VERSION: process.env.VERSION,
            APILOCAL: process.env.APILOCAL,
            APISERVER: process.env.APISERVER,
            SECRET_KEY: process.env.SECRET_KEY,
        }
    };
    return nextConfig;
};
