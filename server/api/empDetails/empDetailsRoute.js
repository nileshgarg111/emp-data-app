'use strict';

/**
 * here register all article Module api route
 * @name empDetailsRoute.js
 */

const express = require('express');
const router = express.Router();
const empDetailsController = require('./empDetailsController');
const EmpDetailsController = new empDetailsController();

router.get('/', EmpDetailsController.getData);

module.exports = router;
