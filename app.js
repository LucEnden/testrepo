var express = require("express");
var app = express();
app.listen(8081, () => {
    console.log("Server running on port 8081");
});

app.get("/products", (req, res, next) => {
    res.json(["YuGiOh booster pack", "Pokemon booster pack"])
})