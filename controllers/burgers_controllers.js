const express = require("express");

const router = express.Router();

const burger = require("../models/burger");
const cat = require("../../../01-Activities/17-CatsApp/Solved/models/cat");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var burgsObject = {
            burgers: data
        };
        console.log(burgsObject);
        res.render("index", burgsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], function (result) {
        res.json({ id: result.insertId })
    });
});

router.put("api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;