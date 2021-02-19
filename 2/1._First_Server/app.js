const express = require("express");
const app = express();

/* let users = {}; */

app.get("/", (req, res) => {
    // Send an empty json as response
    res.send({});
});

app.get("/me", (req, res) => {
    res.send({
        "name":"Michael",
        "lastName": "Berko",
        "age":23,
        "height":"187 cm",
        "nationality":"danish"
    });
});

app.listen(8080);
