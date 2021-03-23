const express = require('express');
const app = express();


console.log(__dirname);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
    
});

app.use(express.static('welcome'))

app.get("/candle", (req, res) => {
    if (req.query.key === "blow"){
        res.send({lightsOn : false})
    }
    else 
    {
        res.send({lightsOn : true });
    }
});

app.get('/welcome', (req, res) => {
    res.sendFile(__dirname + '/welcome/welcome.html')
});

app.get("/pizza", (req, res) => {
    res.sendFile(__dirname + "/public/pizza.html");
});
app.listen(8080, (error) => {
    if(error) {
        console.log(error)
    }
    console.log("server is running on port: ", 8080);
});