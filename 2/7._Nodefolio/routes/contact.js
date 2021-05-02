const router = require('express').Router();

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host : "smtp.gmail.com",
    port : 2525,
    auth: {

    }
})

router.post("/api/contact", (req, res) => {
    
    res.redirect("/");
});

module.exports = {
    router
}