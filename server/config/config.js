const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 5000,
        dbURL: 'mongodb://localhost:27017/tell-me-traveller-db',
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];