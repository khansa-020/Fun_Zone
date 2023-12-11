// contactController.js

const { sendMail } = require('./../../NodeMailer');
const { verifyUser } = require('./verifyUser');


const SendEmail = async (req, res) => {
  const { username, email, message } = req.body;

  try {
    // Verify user before proceeding
    const isUserValid = await verifyUser(username, email);

    if (!isUserValid) {
      return res.status(401).send('Unauthorized user');
    }

    // Craft the email content
    const mailOptions = {
      from: 'khansaabdullah020@gmail.com',
      to: 'khansaaraein@gmail.com',
      subject: 'Contact the Team',
      text: `Username: ${username}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await sendMail(mailOptions);

    res.status(200).send('Message sent successfully.');
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    res.status(500).send('Error sending message.');
  }
};

module.exports = { SendEmail };
