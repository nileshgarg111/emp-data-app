/**
 * @name Exception Handler Middleware
 */
const Utils = require('../util/utilFunctions');
const logger = require('../util/logger');
module.exports = function (err, req, res) {
    if (err.name === 'UnauthorizedError') {
        var responseObject = Utils.errorResponse();
        responseObject.error = [{
            errorMessage: 'Unauthorized Access'
        }];
        return res.status(401).send(responseObject);
    }
    var errResponse = Utils.exceptionResponse();
    err && err.stack && logger.error(err.stack);
    return res.status(500).send(errResponse);
};
