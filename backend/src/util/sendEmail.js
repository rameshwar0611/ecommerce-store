const nodemailer = require("nodemailer");

async function sendVerificationEmail(to, subject, body) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "crowntelevision97@gmail.com",
      pass: "qdfmlsfrspztiwcp",
    },
  });

  const mailOptions = {
    from: "crowntelevision97@gmail.com",
    to,
    subject,
    html: body,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

module.exports = sendVerificationEmail;
