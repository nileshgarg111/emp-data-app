global.appRoot = __dirname;
const envVariables = require('./enVars.json')[process.env.NODE_ENV];


// Load env variables
if (!envVariables) {
    throw new Error('Environment not set');
}

for (var key in envVariables) {
    if (envVariables.hasOwnProperty(key)) {
        process.env[key] = envVariables[key];
    }
}

const logger = require('./server/util/logger');
require('./server/server').listen(process.env.port, function () {
    logger.log('listening on http://localhost:' + process.env.port);
});
