const { response } = require('express');
const mailer = require('nodemailer');

const sendMail = (to) => {
    let transporter = mailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: "onlinedoctor0108@gmail.com",
            pass: "rrswzpsyeazhvinf"
        }
    });

    const mailOptions = {
        from: "onlinedoctor0108@gmail.com",
        to: to,
        subject: "Sending welcoming email",
        text: "Welcome to our website",
        html: "<h1>Thanks for Registration to our website...</h1>"
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if(err)
            console.log(err);
        else
            console.log("Email send: " , info,response);
    })
}


module.exports = sendMail;