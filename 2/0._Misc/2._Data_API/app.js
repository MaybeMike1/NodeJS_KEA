const express = require('express');
const app = express();


app.use(express.json());



app.get("/search", (req,res) => {
    console.log(req.query);
    res.send({query : req.query});
});


app.get("/telegram/:message/:name", (req,res) => {
    const messages = req.params;
    const name = req.params;
    res.send({messages});
});

app.get('/getWine', (req, res) => {
    res.send(wine);
});

const wine = require('./wine.json');

//Post
app.post("/goodstuff", (req,res) => {
    console.log(req.body);
    res.send({body : req.body});
});

app.listen(8080);