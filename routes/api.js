var express = require('express');
var router = express.Router();

const db = require("../db");

router.post('/', function(req, res, next) {
    new db.depense(req.body, (err, data) => {
        if (err) {
            return next(new Error(err));
        } else {
            res.json({ok : 1});
        }
    });
}).get('/', function (req, res, next) {
    db.depense.getAll((err, data) => {
        if (err) {
            return next(new Error(err));
        } else {
            res.json(data);
        }
    })
})

module.exports = router;