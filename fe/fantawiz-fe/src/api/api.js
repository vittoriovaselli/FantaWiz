const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://fantawiz.herokuapp.com/'
});

const getAllPlayers = function getPlayers(){
  return new Promise((resolve, reject) => {
    instance.get('/api/values')
    .then(function (response) {
      resolve(response.data);
    })
    .catch(function (error) {
      reject(error);
    })
  })
}

export default getAllPlayers;