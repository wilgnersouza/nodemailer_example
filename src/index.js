const nodemailer = require("nodemailer");

const SMTP_CONFIG = require("./config/smtp");

const transporter = nodemailer.createTransport({
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  secure: false,
  auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

async function run() {
  const mailSent = await transporter.sendMail({
    text: "Texto do E-mail",
    subject: "Assunto do e-mail",
    from: "Showtimewill Dev Team <noreplystwteam@gmail.com>",
    to: "wilgner@email.com.br",

  });

  console.log(mailSent);
}

run();
