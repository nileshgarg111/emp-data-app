'use strict';

/**
 * This file is used to control all uploadFile api request response .
 * @name empDetailsController.js
 */


const empDetailsService = require('./empDetailsService');
const Utils = require('../../util/utilFunctions');
const EmpDetailsService = new empDetailsService();
const constant = require('../../util/constant');

module.exports = class EmpDetailsController {
     /**
     * @description Upload File function
     * @param req
     * @param res
     */
    getData(req, res) {
        EmpDetailsService.processGetData(req).then(function (resolve) {
            Utils.sendResponse(null, resolve, res, 'GET_EMPLOYEE_DATA');
        }, function (reject) {
            Utils.sendResponse(reject, null, res, 'GET_EMPLOYEE_DATA');
        });
    }
};
