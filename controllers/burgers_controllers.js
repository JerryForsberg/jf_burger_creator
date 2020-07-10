const express = require("express");

const router = express.Router();

const burger = require("../models/burger");
;

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var burgers = {
            burgers: data
        };
        console.log(burgers);
        res.render("index", burgers);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log("This is the burger body: " + req.body);
    burger.insertOne([
        "burger_name"
    ], [
        req.body.name
    ], function (result) {
        burger.selectAll(function (data) {
            var burgers = {
                burgers: data
            };
            console.log(burgers);
            res.render("index", burgers);
        });

    });


});

router.put("/api/burgers/:id", function (req, res) {
    console.log("This is the burger body: " + req.body);
    console.log("This is the burger body: " + req.body.devoured);
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