// import mongoose model schema for db operation
const Article = require('../../api/article/articleModel');
const articleData = require('./seed-data/article-seed');

const User = require('../../api/user/userModel');
const userData = require('./seed-data/user-seed');
const jwt = require('jwt-simple');
describe('Seeding Database: User', () => {
    it('Drop Database', function (done) {
        this.timeout(10000);
        // remove whole collections of data
        User.remove({}, (err, data) => {
            if (data) {
                done();
            } else {
                logger.error(err);
            }
        });
    });

    // insert bulkrecord in database

    it('Import data', function (done) {
        this.timeout(5000);
        User.insertMany(userData.seedData, (err, data) => {
            if (data) {
                console.log(data[0]._id);
                var selectedUserData = {
                    'id': data[0]._id,
                    'firstName': data[0].firstname,
                    'lastName': data[0].lastname,
                    'email': data[0].email,
                    'loginType': data[0].loginType,
                };
                global.token2 = jwt.encode(selectedUserData, process.env.secretKey);
                done();
            } else {
                logger.error(err);
            }
        });
    });
});


describe('Seeding Database: Article', () => {
    it('Drop Database', function (done) {
        this.timeout(10000);

        // remove whole collections of data
        Article.remove({}, function (err, data) {
            if (data) {
                done();
            } else {
                logger.error(err);
            }
        });
    });

    // insert bulkrecord in database

    it('Import data', function (done) {
        this.timeout(2000);
        Article.insertMany(articleData.seedData, function (err, data) {
            if (data) {
                done();
            } else {
                logger.error(err);
            }
        });
    });
});
