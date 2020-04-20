/**
 * This class reprasents common utilities for application
 */
class Utils {
    static errorResponse () {
        return JSON.parse(JSON.stringify({
            status: 0,
            data: {},
            message: ''
        }));
    }

    static successResponse () {
        return JSON.parse(JSON.stringify({
            status: 1,
            data: {},
            message: ''
        }));
    }

    static exceptionResponse () {
        return JSON.parse(JSON.stringify({
            status: 0,
            message: 'Something went wrong please try again.'
        }));
    }


    /**
     * This function is being used to add pagination for user table
     * @param {string} error Error Message
     * @param {Object} data Object to send in response
     * @param {Object} res Response Object
     * @param {string} successMessage success message
     * @param {Object} additionalData additional data outside of data object in response
     */
    static sendResponse (error, data, res, successMessage, additionalData) {
        var responseObject;
        var status;
        if (error) {
            responseObject = Utils.errorResponse();
            if (typeof error === 'object') {
                // mongoose validation error
                if (error.name == 'ValidationError') {
                    var message = Object.keys(error.errors)[0];
                    responseObject.message = error.errors[message].message;
                    // mongo error like aleady exist value and more
                } else {
                    responseObject.message = error.message;
                }
                status = 400;
            } else {
                responseObject.message = error;
                status = 400;
            }
            return res.status(status).send(responseObject);
        } else {
            responseObject = Utils.successResponse();
            responseObject.message = successMessage;
            responseObject.data = data;
            if (additionalData) {
                for (var param in additionalData) {
                    if (additionalData.hasOwnProperty(param))
                        responseObject[param] = additionalData[param];
                }
            }
            return res.status(200).send(responseObject);
        }
    }

    /**
     * @description Generate random string for given length
     * @param length
     * @returns {string}
     */
    static generateRandomString (length) {
        var result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}
module.exports = Utils;
