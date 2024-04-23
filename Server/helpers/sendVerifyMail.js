const nodemailer = require("nodemailer");

const sendVerifyMail = async (username, email, userId) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD, // Your email password or application-specific password
      },
    });
    const mailOptions = {
      from: "khansaaraein@gmail.com", // Your email address
      to: email,
      subject: "FunZone Account Verification",
      html: `<p> Hi ${username}, Please click <a href="http://localhost:5000/verify/${userId}">here</a> to verify your email address.</p>`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email has been sent:", info.response);
      }
    });
  } catch (error) {
    console.error("Error sending verification email:", error);
  }
};

module.exports = { sendVerifyMail };
