/**
 * This file is used as here register all api module
 * @name api.js
 */

const router = require('express').Router();

router.use('/emp-details', require('./empDetails/empDetailsRoute'));
module.exports = router;
