
const axios = require('axios')

const url = 'https://api.trackland.srv.br/v1/autologin';
const appToken = 'sampleToken';

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Basic ${appToken}`
}

const requestUrl = (data) => {
  return axios.post(url, data, { headers: headers });
}

module.exports = {
    requestUrl: requestUrl,
}
