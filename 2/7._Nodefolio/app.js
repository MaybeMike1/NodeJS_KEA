const { errorMonitor } = require('events');
const express = require('express');

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

const contactRouter = require("./routes/contact.js");
const projectRouter = require("./routes/project.js");
const educationRouter = require("./routes/education.js");
const skillsRouter = require("./routes/skills.js");
const recommendationRouter = require("./routes/recommendation.js");

app.use(contactRouter.router);
app.use(projectRouter.router);
app.use(educationRouter.router);
app.use(skillsRouter.router);
app.use(recommendationRouter.router);

const fs = require('fs');

const header = fs.readFileSync(__dirname + "/public/header/header.html", "utf-8");
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html","utf-8");

const frontpage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf-8");
const contactPage = fs.readFileSync(__dirname + "/public/contactme/contact-me.html", "utf-8");
const projectPage = fs.readFileSync(__dirname + "/public/projectspage/projectspage.html", "utf-8");
const skillsPage = fs.readFileSync(__dirname + "/public/skillspage/skillspage.html", "utf-8");
const educationPage = fs.readFileSync(__dirname + "/public/education/education.html", "utf-8");
const recommendationPage = fs.readFileSync(__dirname + "/public/recommendationPage/recommendationPage.html", "utf-8");

app.get('/', (req, res) => {
    try {
        res.send(header + frontpage +  footer); 
    } catch (error) {
       console.log('Error : ' + error.toString()); 
    }
    
});

app.get('/contact', (req,res) => {
    try {
        res.send(header + contactPage +footer);
    } catch (error) {
        console.log('Error: ' + error.toString + 'Status Code: ' + res.statusCode);
    }
    
});

app.get('/projects', (req,res) => {
    try {
        res.send(header + projectPage + footer);
    } catch (error) {
        console.log('Error: ' + error.toString());
    }
    
});

app.get('/skills', (req, res) => {
    try {
        res.send(header + skillsPage +  footer);
    } catch (error) {
        console.log('Error: ', error.toString());
    }
});

app.get('/contact', (req, res) => {
    try{
        res.send(header + contactPage + footer);
    }catch {
            console.log("Error: ", error.toString());
    }
})

app.get('/education', (req, res) => {
    try{
        res.send(header + educationPage +  footer);
    }catch (error) {
        console.log("Error: ", error.toString());
    }
});

app.get('/recommendation', (req, res) => {
    try {
        res.send(header + recommendationPage +  footer);
    }catch (error) {
        console.log("Error: ", error.toString());
    }
});

const server = app.listen(80 || process.env.PORT, (error) => {
    if(error) {
        console.log(error);
    }
    console.log("The server is running on", server.address().port);
});

