const router = require('express').Router();

/* 

*/

const projects = [{
    title : "Nodefolio",
    description: "Personal portfolio implemented in Node.js",
    startDate: new Date("2021-04-08"),
    endDate: new Date("2021-05-08"),
    gitLink: "https://github.com/MaybeMike1/NodeJS_KEA/tree/main/2/7._Nodefolio",
    language: ['JavaScript', 'HTML', 'CSS'],
    techUsed: ['NodeJS', 'ExpressJS']
}, {
    title : "Nordic Motorhome",
    description: "A Java Spring Boot application, that helps motorhome rentals track each motorhome being rented.",
    startDate: new Date("2020-05-09"),
    endDate: new Date("2020-06-09"),
    gitLink: "https://github.com/Uncle-Jules/Nordic-Motorhome-Eksamen",
    language: ['Java', 'HTML', 'CSS', 'MySQL'],
    techUsed: ['Spring Boot MVC', 'JDBC', 'Hibernate']
},{
    title : "Kailua Car Rental",
    description: "A mandatory assignment, that was developed for Kailua Car Rental to keep track of cars being rent.",
    startDate: new Date("2020-03-28"),
    endDate: new Date("2020-05-14"),
    gitLink: "https://github.com/Uncle-Jules/Nordic-Motorhome-Eksamen",
    language: ['Java', 'HTML', 'CSS', 'MySQL'],
    techUsed: ['Spring Boot MVC', 'JDBC', 'Prepared Statements'] 
}];

router.get("/api/projects", (req, res) => {
    res.send({ projects })
})


module.exports = {
    router
}