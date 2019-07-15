exports.up = knex => Promise.all([
  knex.schema.createTable('users', (table) => {
    table.increments();
    table.unique('name');
    table.string('name').notNullable();
  }),

  knex.schema.createTable('cards', (table) => {
    table.increments();
    table.unique('name');
    table.string('name').notNullable();
    table.string('desc').notNullable();
    table.string('fact').notNullable();
    table.string('img_url').notNullable();
  }),

  knex.schema.createTable('users_cards', (table) => {
    table.integer('user_id').notNullable();
    table.integer('card_id').notNullable();
  }),
]);

exports.down = knex => Promise.all([
  knex.schema.dropTable('users'),
  knex.schema.dropTable('cards'),
  knex.schema.dropTable('users_cards'),
]);
