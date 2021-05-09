const router = require('express').Router();

const nodemailer = require("nodemailer");



require("dotenv").config();
const userName = process.env.USEREMAIL;

const password = process.env.PASSWORD;


let transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
       user: userName,
       pass: password
   }

});



router.post("/api/contact", (req, res) => {
    console.log(req.body);
    let mailDetails = {
        from: `${req.body.fullname} <BusinessBerko2@gmail.com>`,
        to: "Michaelberko3@gmail.com",
        subject: "Company " + req.body.companyName + " was to get in touch",
        text: req.body.message
    
    };
    transporter.sendMail(mailDetails, function(error, data) {
        if(error) {
            console.log("Error happenend: ", error);
        } else{
            console.log("Mail sent successfully");
        }
    })
    res.redirect("/");
});

module.exports = {
    router
}