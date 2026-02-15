const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com", // or smtp.gmail.com
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendRegistrationEmail = async (to, name) => {
  await transporter.sendMail({
    from: `"Kushi Busy" <${process.env.EMAIL_USER}>`,
    to: to,
    subject: "Registration Successful",
    html: `
      <h2>Welcome ${name}!</h2>
      <p>Your registration was successful.</p>
      <p>You can now login and start using our service.</p>
      <a href="https://www.kushibusy.in/login">
        Login Here
      </a>
      <p>If you did not create this account, please contact support.</p>
    `,
  });
};

module.exports = sendRegistrationEmail;
