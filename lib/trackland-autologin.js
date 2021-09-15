const axios = require('axios')


const url = 'https://api.trackland.srv.br/v1/autologin';
const APP_TOKEN = process.env.APP_TOKEN;

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${APP_TOKEN}`
}

const requestUrl = (data) => {
  return axios.post(url, data, { headers: headers });
}

module.exports = {
    requestUrl: requestUrl,
}
