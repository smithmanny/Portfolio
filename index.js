const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
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
  const verifyURL = `https://google.com/recaptcha/api/siteverify?secret=${captchaKey}&response=${
    req.body.captcha
  }&remoteip=${req.connection.remoteAddress}`;

  // Make request to VerifyURL
  request(verifyURL, (err, response, body) => {
    body = JSON.parse(body);

    // If Not Successful
    if (body.success !== undefined && !body.success) {
      return res.json({ success: false, msg: 'Failed captcha verification' });
    }

    // If Recaptcha pass send data to Hubspot
    const hubspotAPI = keys.hubspotAPI;

    const data = {
      firstname: req.body.name,
      email: req.body.email,
      message: req.body.message
    };

    const headers = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    const options = {
      method: 'POST',
      url: hubspotAPI,
      headers,
      form: data
    };

    request(options, function(error, response, body) {
      if (error) throw new Error(error);
    });

    // Send success message to client side
    return res.json({ success: true, msg: 'Captcha passed' });
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
