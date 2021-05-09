const router = require('express').Router();

/* 

*/

const skills = [{
    title : "Frontend Dev",
    description: "Doing Frontend for web applications",
    /* startDate: new Date("2004-08-12"),
    endDate: new Date("2014-07-25"), */
    technology: ["HTML", "CSS", "JavaScript"],
    progress: 60
}, {
    title : "Backend Dev",
    description: "Doing Backend for web application",
    /* startDate: new Date("2014-08-15"),
    endDate: new Date("2017-07-23"), */
    technology: ["Spring Boot", "Express JS", "JDBC", "JPA", "AJAX", "Restful API"],
    progress: 55
},{
    title : "Deployment/DevOps",
    description: "Working with deployment and subsystems",
   /*  startDate: new Date("2020-03-28"),
    endDate: new Date("2020-05-14"), */
    technology: ["Jenkins CI/CD Pipeline" , "Amazon Web Services", "Heroku"],
    progress: 70
}];

router.get("/api/skills", (req, res) => {
    res.send({ skills });
});

module.exports =  {
    router
}
