const axios = require('axios');

module.exports = {
  fetchCard: name => axios.get(`/api/card/${name}`)
    .then(res => res.data),

  fetchCards: () => axios.get('/api/card')
    .then(res => res.data),

  createCard: card => axios.post('/api/card', card),
};
