var express = require('express');
var router = express.Router();

const db = require("../db");

router.post('/', function(req, res, next) {
    new db.depense(req.body, (err, data) => {
        if (err) {
            console.log("ici", err)
            return next(new Error(err));
        } else {
            res.json({ok : 1});
        }
    });
}).get('/', function (req, res, next) {
    db.depense.getAll(req.query.period, (err, data) => {
        if (err) {
            return next(new Error(err));
        } else {
            console.log(data)
            res.json(data);
        }
    })
})

module.exports = router;