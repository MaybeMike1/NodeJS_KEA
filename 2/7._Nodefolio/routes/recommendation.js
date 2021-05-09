const router = require('express').Router();

const recommendations = [{
    workplace: "Børnehuset Lyngborghave",
    recommendationType: "Working Recommendation",
    commune: "Rudersdal Kommune",
    workingPosition: "Vikar (Pædagogmedhjælper)",
    certificateUrl: "assets/recommendation_1.jpg" 
}, {
    workplace: "Birkerød Gymnasium / Denmarks Tekniske Universitet",
    recommendationType: "Study Certificate",
    commune: "Rudersdal Kommune / Lyngby Taarbæk Kommune",
    workingPosition: "Student",
    certificateUrl: "assets/recommendation_2.jpg"
}];

router.get("/api/recommendations", (req, res) => {
    res.send({recommendations})
});

module.exports = {
    router
};
