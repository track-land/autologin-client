const express = require('express');
const router = express.Router();
const tracklandAutologin = require('../lib/trackland-autologin');

router.get('/', async (req, res) => {
  
  const email = req.query.email;

  if (!email) {
    return  res.render('index', { 
      title: 'Trackland Autologin',
      email: email,
      url: null,
      error: null
    });
  }

  try {
    const requested = await tracklandAutologin.requestUrl({email: email});

    return res.render('index', { 
      title: 'Trackland Autologin',
      email: requested.data.email,
      url: requested.data.url,
      error: null
    });
  } catch (error) {

    return res.render('index', { 
      title: 'Trackland Autologin',
      email: email,
      url: null,
      error: error.response.data.error
    });
  }
  
});

module.exports = router;
