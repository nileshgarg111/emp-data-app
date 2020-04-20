const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const request = require('supertest');
const articleData = require('./seed-data/article-seed');
const app = require('../../../');
request(app);
chai.use(chaiHttp);
const ArticleTest = require('./testdata/article-testdata');
var saveClips = undefined;
var saveClipBool = undefined;
describe('Article:-> ', () => {
    // get default article prediction from ML
    describe('Get Default Data From ML:->', () => {
        ArticleTest.GetDefaultArticleDataFromML.forEach(testCase => {
            it(testCase.it, function (done) {
                request(process.env.url)
                    .post('/api/v1/article/getFactsAndOpinion')
                    .set('Accept-Language', 'en')
                    .set('accessToken', global.token2)
                    .send(articleData.requestDataToMl)
                    .end(function (err, res) {
                        if (err) {
                            logger.error(err);
                        } else {
                            assert.equal(res.body.status, testCase.status);
                            done();
                        }
                    });
            });
        });
    });

    // get default and user changes facts and opnion from databases and also from ml
    describe('Get User Data With ML:->', () => {
        ArticleTest.GetUserArticleDataWithML.forEach(testCase => {
            it(testCase.it, function (done) {
                request(process.env.url)
                    .post('/api/v1/article/getUserFactsAndOpinion')
                    .set('Accept-Language', 'en')
                    .set('accessToken', global.token2)
                    .send(articleData.requestDataToMl)
                    .end(function (err, res) {
                        if (err) {
                            logger.error(err);
                        } else {
                            assert.equal(res.body.status, testCase.status);
                            done();
                        }
                    });
            });
        });
    });

    // save user changes of facts and opnion
    describe('Save Article Facts And Opnion:->', () => {
        ArticleTest.SaveArticle.forEach(testCase => {
            it(testCase.it, function (done) {
                request(process.env.url)
                    .post('/api/v1/article/')
                    .type('form')
                    .send(articleData.seedData[0])
                    .set('Accept-Language', 'en')
                    .set('accessToken', global.token2)
                    .end(function (err, res) {
                        if (err) {
                            logger.error(err);
                        } else {
                            assert.equal(res.body.status, testCase.status);
                            done();
                        }
                    });
            });
        });
    });

    // save article formatting like underline and saveClips.
    describe('Save Article Formatting:->', () => {
        ArticleTest.SaveArticleFormatting.forEach(testCase => {
            it(testCase.it, function (done) {
                request(process.env.url)
                    .post('/api/v1/article/saveFormat')
                    .type('form')
                    .send(articleData.storeSaveClip)
                    .set('Accept-Language', 'en')
                    .set('accessToken', global.token2)
                    .end(function (err, res) {
                        if (err) {
                            logger.error(err);
                        } else {
                            global.unCategoryId = res.body.data.saveClip[0].categoryId;
                            assert.equal(res.body.status, testCase.status);
                            done();
                        }
                    });
            });
        });
    });

    // save article formatting like underline and saveClips.
    describe('Save Article Formatting:->', () => {
        ArticleTest.SaveArticleFormatting.forEach(testCase => {
            it(testCase.it, function (done) {
                request(process.env.url)
                    .post('/api/v1/article/saveFormat')
                    .type('form')
                    .send(articleData.storeUnderline)
                    .set('Accept-Language', 'en')
                    .set('accessToken', global.token2)
                    .end(function (err, res) {
                        if (err) {
                            logger.error(err);
                        } else {
                            global.articleId = res.body.data._id;
                            saveClipBool = [{
                                'articleId': res.body.data._id,
                                'uid': res.body.data.saveClipBool[0].uid
                            }];
                            assert.equal(res.body.status, testCase.status);
                            done();
                        }
                    });
            });
        });
    });

    // get default and user changes facts and opnion from databases and also from ml
    describe('Get User Data With ML:->', () => {
        ArticleTest.GetUserArticleDataWithML.forEach(testCase => {
            it(testCase.it, function (done) {
                request(process.env.url)
                    .post('/api/v1/article/getUserFactsAndOpinion')
                    .set('Accept-Language', 'en')
                    .set('accessToken', global.token2)
                    .send(articleData.requestDataToMl)
                    .end(function (err, res) {
                        if (err) {
                            logger.error(err);
                        } else {
                            assert.equal(res.body.status, testCase.status);
                            done();
                        }
                    });
            });
        });
    });

    // get default and user changes facts and opnion from databases and also from ml
    describe('Get User Data With ML:->', () => {
        ArticleTest.GetUserArticleDataWithML.forEach(testCase => {
            it(testCase.it, function (done) {
                request(process.env.url)
                    .post('/api/v1/article/getUserFactsAndOpinion')
                    .set('Accept-Language', 'en')
                    .set('accessToken', global.token2)
                    .send(articleData.requestDataToMl1)
                    .end(function (err, res) {
                        if (err) {
                            logger.error(err);
                        } else {
                            assert.equal(res.body.status, testCase.status);
                            done();
                        }
                    });
            });
        });
    });

    // Add and  Update saveclips bool
    describe('Update SaveClipBool', () => {
        ArticleTest.UpdateSaveClipBool.forEach(testCase => {
            it(testCase.it, function (done) {
                request(process.env.url)
                    .put('/api/v1/article/updateSaveClipBool')
                    .set('Accept-Language', 'en')
                    .set('accessToken', global.token2)
                    .send(articleData.storeUnderline)
                    .end(function (err, res) {
                        if (err) {
                            logger.error(err);
                        } else {
                            assert.equal(res.body.status, testCase.status);
                            done();
                        }
                    });
            });
        });
    });

    // Get list of saved clips of logged in user
    describe('Get Saved Clips ->', () => {
        ArticleTest.GetSavedClips.forEach(testCase => {
            it(testCase.it, function (done) {
                request(process.env.url)
                    .get('/api/v1/article/getSaveClip')
                    .set('Accept-Language', 'en')
                    .set('accessToken', global.token2)
                    .end(function (err, res) {
                        saveClips = res.body.data[0];
                        if (err) {
                            logger.error(err);
                        } else {
                            assert.equal(res.body.status, testCase.status);
                            done();
                        }
                    });
            });
        });
    });

    // add saveClip category Id
    describe('Add SavedClips CategoryId:->', () => {
        ArticleTest.AddCategoryId.forEach(testCase => {
            it(testCase.it, function (done) {
                var requestData = {
                    'uid': '123',
                    'newCategoryId': global.CategoryId
                };
                request(process.env.url)
                    .post('/api/v1/article/addCategoryId')
                    .set('Accept-Language', 'en')
                    .set('accessToken', global.token2)
                    .send(requestData)
                    .end(function (err, res) {
                        if (err) {
                            logger.error(err);
                        } else {
                            assert.equal(res.body.status, testCase.status);
                            done();
                        }
                    });
            });
        });
    });

    // add saveClip category Id
    describe('Add SavedClips CategoryId:->', () => {
        ArticleTest.AddCategoryId.forEach(testCase => {
            it(testCase.it, function (done) {
                var requestData = {
                    'uid': 'skim-ai-87',
                    'newCategoryId': global.CategoryId,
                    'articleId': global.articleId
                };
                request(process.env.url)
                    .post('/api/v1/article/addCategoryId')
                    .set('Accept-Language', 'en')
                    .set('accessToken', global.token2)
                    .send(requestData)
                    .end(function (err, res) {
                        if (err) {
                            logger.error(err);
                        } else {
                            assert.equal(res.body.status, testCase.status);
                            done();
                        }
                    });
            });
        });
    });

    describe('Add SavedClips CategoryId:->', () => {
        ArticleTest.AddCategoryId.forEach(testCase => {
            it(testCase.it, function (done) {
                var requestData = {
                    'uid': '1234',
                    'newCategoryId': global.CategoryId1
                };
                request(process.env.url)
                    .post('/api/v1/article/addCategoryId')
                    .set('Accept-Language', 'en')
                    .set('accessToken', global.token2)
                    .send(requestData)
                    .end(function (err, res) {
                        if (err) {
                            logger.error(err);
                        } else {
                            assert.equal(res.body.status, testCase.status);
                            done();
                        }
                    });
            });
        });
    });

    // add saveClip category Id
    describe('Remove SavedClips CategoryId:->', () => {
        ArticleTest.RemoveCategoryId.forEach(testCase => {
            it(testCase.it, function (done) {
                var requestData = {
                    'uid': '123',
                    'CategoryId': global.CategoryId
                };
                request(process.env.url)
                    .post('/api/v1/article/removeSaveClipAssociatedCategory')
                    .set('Accept-Language', 'en')
                    .set('accessToken', global.token2)
                    .send(requestData)
                    .end(function (err, res) {
                        if (err) {
                            logger.error(err);
                        } else {
                            assert.equal(res.body.status, testCase.status);
                            done();
                        }
                    });
            });
        });
    });

    // add saveClip category Id
    describe('Remove SavedClips CategoryId:->', () => {
        ArticleTest.RemoveCategoryId.forEach(testCase => {
            it(testCase.it, function (done) {
                var requestData = {
                    'uid': 'skim-ai-87',
                    'CategoryId': global.CategoryId,
                    'articleId': global.articleId                    
                };
                request(process.env.url)
                    .post('/api/v1/article/removeSaveClipAssociatedCategory')
                    .set('Accept-Language', 'en')
                    .set('accessToken', global.token2)
                    .send(requestData)
                    .end(function (err, res) {
                        if (err) {
                            logger.error(err);
                        } else {
                            assert.equal(res.body.status, testCase.status);
                            done();
                        }
                    });
            });
        });
    });

    // Delete selected saveclips for selected articles
    describe('Delete Saved Clips ->', () => {
        ArticleTest.DeleteSavedClips.forEach(testCase => {
            it(testCase.it, function (done) {
                request(process.env.url)
                    .post('/api/v1/article/deleteSaveClip')
                    .set('Accept-Language', 'en')
                    .set('accessToken', global.token2)
                    .send([{
                        'articleId': saveClips._id,
                        'uid': saveClips.uid
                    }])
                    .end(function (err, res) {
                        if (err) {
                            logger.error(err);
                        } else {
                            assert.equal(res.body.status, testCase.status);
                            done();
                        }
                    });
            });
        });
    });

    // Delete selected saveclips for selected articles
    describe('Delete Saved Clips ->', () => {
        ArticleTest.DeleteSavedClips.forEach(testCase => {
            it(testCase.it, function (done) {
                request(process.env.url)
                    .post('/api/v1/article/deleteSaveClip')
                    .set('Accept-Language', 'en')
                    .set('accessToken', global.token2)
                    .send(saveClipBool)
                    .end(function (err, res) {
                        if (err) {
                            logger.error(err);
                        } else {
                            assert.equal(res.body.status, testCase.status);
                            done();
                        }
                    });
            });
        });
    });

    // Add and  Update saveclips bool
    describe('Save Top Facts', () => {
        ArticleTest.SaveTopFacts.forEach(testCase => {
            it(testCase.it, function (done) {
                request(process.env.url)
                    .post('/api/v1/article/saveTopFacts')
                    .set('Accept-Language', 'en')
                    .set('accessToken', global.token2)
                    .send(articleData.storeUnderline)
                    .end(function (err, res) {
                        if (err) {
                            logger.error(err);
                        } else {
                            assert.equal(res.body.status, testCase.status);
                            done();
                        }
                    });
            });
        });
    });

    // upload new pdf
    describe('Share Modfied Article:->', () => {
        ArticleTest.ShareModifiedArticle.forEach(testCase => {
            it(testCase.it, function (done) {
                request(process.env.url)
                    .post('/api/v1/article/shareArticleMarkup')
                    .attach('file', __dirname + '/seed-data/index.html')
                    .set('Accept-Language', 'en')
                    .set('accessToken', global.token2)
                    .end(function (err, res) {
                        if (err) {
                            logger.error(err);
                        } else {
                            assert.equal(res.body.status, testCase.status);
                            done();
                        }
                    });
            });
        });
    });

    describe('Detect language:->', () => {
        ArticleTest.DetectLanguage.forEach(testCase => {
            it(testCase.it, function (done) {
                request(process.env.url)
                    .post('/api/v1/article/detect-language')
                    .set('Accept-Language', 'en')
                    .send({data:testCase.data})
                    .end(function (err, res) {
                        if (err) {
                            logger.error(err);
                        } else {
                            assert.equal(res.body.status, testCase.status);
                            done();
                        }
                    });
            });
        });
    });

    describe('Get Bib from object', () => {
        ArticleTest.GetBibFromObj.forEach(testCase => {
            it(testCase.it, function (done) {
                request(process.env.url)
                    .get('/api/v1/article/objToBib')
                    .set('Accept-Language', 'en')
                    .set('accessToken', global.token2)
                    .query(testCase.options)
                    .end(function (err, res) {
                        if (err) {
                            logger.error(err);
                        } else {
                            assert.equal(res.body.status, testCase.status);
                            done();
                        }
                    });
            });
        });
    });

    describe('Get multiple Bib from object', () => {
        ArticleTest.GetMultipleBibFromObj.forEach(testCase => {
            it(testCase.it, function (done) {
                request(process.env.url)
                    .post('/api/v1/article/objToBib')
                    .set('Accept-Language', 'en')
                    .set('accessToken', global.token2)
                    .send(testCase.options)
                    .end(function (err, res) {
                        if (err) {
                            logger.error(err);
                        } else {
                            assert.equal(res.body.status, testCase.status);
                            done();
                        }
                    });
            });
        });
    });

    describe('Manually add bibtex', () => {
        ArticleTest.ManuallyAddBib.forEach(testCase => {
            it(testCase.it, function (done) {
                request(process.env.url)
                    .post('/api/v1/article/manualBib')
                    .set('Accept-Language', 'en')
                    .set('accessToken', global.token2)
                    .send(testCase.options)
                    .end(function (err, res) {
                        if (err) {
                            logger.error(err);
                        } else {
                            assert.equal(res.body.status, testCase.status);
                            done();
                        }
                    });
            });
        });
    });
});
