/**
 * @name Swagger Configuration file
 */

const swaggerTools = require('swagger-tools');
const swaggerJson = require('../public/swagger.json');

var options = {
    swaggerUi: '/swagger.json',
    controllers: './server'
};

swaggerJson.host = 'localhost:7000';
swaggerJson.info.description = 'HostName / URL : ' + swaggerJson.host;
swaggerJson.schemes[0] = 'http';

module.exports = function (app) {

    // Initialize the Swagger middleware
    swaggerTools.initializeMiddleware(swaggerJson, function (middleware) {
        // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
        app.use(middleware.swaggerMetadata());

        // Validate Swagger requests
        app.use(middleware.swaggerValidator());

        // Route validated requests to appropriate controller
        app.use(middleware.swaggerRouter(options));

        // Serve the Swagger documents and Swagger UI
        app.use(middleware.swaggerUi());
    });
};
