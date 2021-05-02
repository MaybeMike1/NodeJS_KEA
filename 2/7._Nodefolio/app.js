const { errorMonitor } = require('events');
const express = require('express');
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

const contactRouter = require("./routes/contact.js");
const projectRouter = require("./routes/project.js");


app.use(contactRouter.router);
app.use(projectRouter.router);

const fs = require('fs');

const header = fs.readFileSync(__dirname + "/public/header/header.html", "utf-8");
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html","utf-8");

const frontpage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf-8");

console.log(header)
console.log(footer);

app.get('/', (req, res) => {
    try {
        res.send(header + frontpage +  footer); 
    }catch (error){
       console.log('Error : ' + error.toString()); 
    }
    
});

app.get('/about', (req,res) => {
    try {
        res.send(header + footer);
    } catch (error) {
        console.log('Error: ' + error.toString + 'Status Code: ' + res.statusCode);
    }
    
});

app.get('/projects', (req,res) => {
    try {
        res.send(header + footer);
    }catch (error) {
        console.log('Error: ' + error.toString());
    }
    
});

app.get('/skills', (req, res) => {
    try{
        res.send(header + footer);
    }catch(error) {
        console.log('Error: ', error.toString());
    }
});

app.listen(8080 || process.env.PORT, (error) => {
    if(error) {
        console.log(error);
    }
    console.log("The server is running on");
});

