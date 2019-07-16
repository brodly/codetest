const cards = require('../data/cards');

const usersCards = [];

for (let i = 1; i <= cards.length; i += 1) {
  usersCards.push({ user_id: 1, card_id: i });
}

exports.seed = knex => knex('users_cards').del()
  .then(() => knex('users_cards').insert(usersCards));
