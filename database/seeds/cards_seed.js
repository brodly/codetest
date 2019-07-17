const cards = require('../data/cards');

exports.seed = knex => knex('cards').del()
  .then(() => knex('cards').insert(cards));
