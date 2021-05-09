const router = require('express').Router();


const skills = [{
    title : "Frontend Dev",
    description: "Doing Frontend for web applications",
    technology: ["HTML", "CSS", "JavaScript"],
    progress: 60
}, {
    title : "Backend Dev",
    description: "Doing Backend for web application",
    technology: ["Spring Boot", "Express JS", "JDBC", "JPA", "AJAX", "Restful API"],
    progress: 55
},{
    title : "Deployment/DevOps",
    description: "Working with deployment and subsystems", 
    technology: ["Jenkins CI/CD Pipeline" , "Amazon Web Services", "Heroku"],
    progress: 70
}];

router.get("/api/skills", (req, res) => {
    res.send({ skills });
});

module.exports =  {
    router
};
