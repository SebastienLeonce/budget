const DepenseModel = require('./models/Depense.js');

module.exports = class User {
    constructor(data, cb) {
        DepenseModel.create(data, function (err, depense) {
            cb(err, depense);
        });
    }

    static getAll(cb) {
        DepenseModel.find(function (err, res) {
            cb(err, res);
        })
    }
};