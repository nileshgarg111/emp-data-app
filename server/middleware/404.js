/**
 * @name 404 Handler
 */

module.exports = function (req, res) {
    res.status(404).send({
        status: 0,
        data: {},
        error: '',
        message: res.__('NOT_FOUND')
    });
};
