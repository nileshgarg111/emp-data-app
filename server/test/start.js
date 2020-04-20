const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);
global.HTTPStatus = require('http-status');
global.ccsAssert = (var1, var2, print) => {
    if (var1 !== var2) {
        logger.error(print);
    }
    assert.equal(var1, var2);
};
describe('Server: ', function () {
    this.timeout(10000);
});
