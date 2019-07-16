/* eslint-disable camelcase */
/* eslint-disable object-curly-newline */
const db = require('../index');

module.exports = {
  createCard: ({ name, desc, fact, img_url }) => db.raw('insert into cards values (default, ?, ?, ?, ?);', [name, desc, fact, img_url]),
  getCard: name => db('cards').where(name),
  getAllCards: () => db.select().table('cards'),
  updateCard: (name, data) => { db('cards').where({ name }).update(data); },
  deleteCard: (name) => { db('cards').where({ name }).del(); },
};
