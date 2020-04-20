'use strict';

/**
 * This file is used as connnect with mongodb database
 * @name db.js
 */

const mongoose = require('mongoose');
var db = {};

mongoose.Promise = global.Promise;

// get username and password from secret file after decrypt.

const option = {
    user: process.env.db_username,
    pass: process.env.db_password,
    useMongoClient: true
};

//  connect with mongodb using mongoose
mongoose.connect(process.env.db_url, process.env.db_database, process.env.db_port, option).then(function (res) {
    db = res;
}, function (err) {
    logger.error(err);
});

module.exports = db;
