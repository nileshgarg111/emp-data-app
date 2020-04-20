const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
describe('stop Server: ', function () {
    this.timeout(15000);
    it('Stop server', function (done) {
        process.exit();
    });
});
