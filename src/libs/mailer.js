import { config } from "dotenv";
config()

const nodemailer = require('nodemailer');

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.USER_MAILER, // generated ethereal user
      pass: process.env.PASS_MAILER, // generated ethereal password
    },
});


transporter.verify().then( () => {
    console.log('Listo para enviar email');
});
