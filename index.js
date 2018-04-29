const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
const request = require('request');
const keys = require('./config/keys');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.post('/api/form', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    // HTML email
    const htmlEmail = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
        user: keys.email,
        clientId: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        refreshToken: keys.refreshToken,
        expires: 1484314697598
      }
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: keys.email, // sender address
      to: keys.email, // list of receivers
      replyTo: req.body.email,
      subject: 'New Contact Message ✔', // Subject line
      text: req.body.message, // plain text body
      html: htmlEmail // html body
    };

    // Recaptcha
    if (
      req.body.captcha === undefined ||
      req.body.captcha === '' ||
      req.body.captcha === null
    ) {
      return res.json({ success: false, msg: 'Please select captcha' });
    }

    // Recaptcha Secret Key
    const captchaKey = keys.captchaKey;

    // Verify URL
    const verifyURL = `https://google.com/recaptcha/api/siteverify?secret=${captchaKey}&response=${req
      .body.captcha}&remoteip=${req.connection.remoteAddress}`;

    // Make request to VerifyURL
    request(verifyURL, (err, response, body) => {
      body = JSON.parse(body);

      // If Not Successful
      if (body.success !== undefined && !body.success) {
        return res.json({ success: false, msg: 'Failed captcha verification' });
      }

      // If Successful
      return res.json({ success: true, msg: 'Captcha passed' });
    })

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
