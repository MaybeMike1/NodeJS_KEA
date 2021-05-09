const router = require('express').Router();

const educations = [{
    title : "Toftevang Skolen",
    description: "10 years of primary school",
    startDate: new Date("2004-08-12"),
    endDate: new Date("2014-07-25"),
    school: "Primary School",
    subjects: ["Fundamentals of doing school and understanding basic subjects"]
}, {
    title : "Birkerød Gymnasium",
    description: "High School with studies in Chemistry and Math",
    startDate: new Date("2014-08-15"),
    endDate: new Date("2017-07-23"),
    school: "High School",
    subjects: ["Math", " Chemistry", " Physics"]
},{
    title : "Københavns Erhvervsakademi",
    description: "A mandatory assignment, that was developed for Kailua Car Rental to keep track of cars being rent.",
    startDate: new Date("2020-03-28"),
    endDate: new Date("2020-05-14"),
    school: "Business Academy",
    subjects: ["Programming", " Software Development", " Computer Technology"]
}];

router.get("/api/education", (req, res) => {
    res.send({ educations });
});


module.exports = {
    router
};