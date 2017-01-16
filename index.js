var express = require("express");
var app = express();

var webPort = process.env.NODE_WWW_PORT || 3000;

console.log("Starting server on " + webPort);

app.use("/", express.static(__dirname+'/dist/'));


app.listen(webPort, function () {
    console.log("Listening to port " + webPort);
});
