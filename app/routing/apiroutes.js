var fish = require("../data/fish.js");

module.exports = function(app) {

    app.get("/api/fish", function (req, res) {
        res.json(fish);
    });

    app.post("/api/fish", function (req, res) {
        fish.push(req.body);
        res.json(fish);
    });

}