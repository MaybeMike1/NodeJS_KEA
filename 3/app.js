const express = require('express');
const app = express();

const date = new Date();

const daysInString = ['If this occurs the world wil end tommorw.','Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const monthsInString = ['If this occurs the world wil end tommorw.', 'January', 'Febuary', 'March', 'April', 'May', 'June', 
'July', 'August', 'September', 'October', 'November', 'December'];

app.get("/", (req,res) =>{
    res.send();
})

app.get("/time", (req, res) =>{
    res.send({"Time" : date.getUTCDay})
})

app.get("/day", (req, res) => {
    res.send({"Day: " : daysInString[date.getDay()]})
})

app.get("/month", (req, res) => {
    res.send({"Month: " : monthsInString[date.getUTCMonth()]})
})

app.get("/about", (req,res) => {
    res.send({"version: " : "1"});
});

app.get("/page", (req,res) => {
    res.send("<h1>Welcome</h1>");
});


app.listen(8080);
