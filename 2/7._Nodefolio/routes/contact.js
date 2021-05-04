const router = require('express').Router();

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
       user: '',
       pass: ""
   }

});



router.post("/api/contact", (req, res) => {
    console.log(req.body);
    let mailDetails = {
        from: 'michaelberko3@gmail.com',
        to: req.body.emailAddress,
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