/**
 * @name Server Configuration
 */

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const methodOverride = require('method-override');
global.logger = require('./util/logger');
const api = require('./api/api');
require('./database/db');
const app = express();
app.use('/coverage', express.static(__dirname + '/../coverage/lcov-report'));
app.use('/', express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/../jsdocs/'));
app.use(express.static(__dirname + '/../upload/'));
app.use('public', express.static(__dirname + '/../public'));
app.use('/db', express.static(__dirname + '/../data-dictionary/'));
app.set('view engine', 'html');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({'limit': '50mb'}));
app.use(cors());
app.use(methodOverride());
app.use('/api/v1', api);
app.use(require('./middleware/exceptionHandler'));

require('./util/swagger')(app);
module.exports = app;
