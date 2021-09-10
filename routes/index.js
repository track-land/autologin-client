const express = require('express');
const router = express.Router();
const tracklandAutologin = require('../lib/trackland-autologin');

router.get('/', async (req, res) => {
  
  const email = 'teste@example.com';
  const requested = await tracklandAutologin.requestUrl(email);

  res.render('index', { 
    title: 'Trackland Autologin',
    email: requested.email,
    url: requested.url
  });
});

module.exports = router;
