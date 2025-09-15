const nodemailer = require("nodemailer");

async function sendVerificaationEmail(to, subject, body) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your_email",
      password: "your_password",
    },
  });

  const mailOptions = {
    from: "your_email",
    to,
    subject,
    html: body,
  };

  await transporter.sendMail(mailOptions);
}

module.exports = sendVerificaationEmail;
