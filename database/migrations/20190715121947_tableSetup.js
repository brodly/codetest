exports.up = knex => Promise.all([
  knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('name').notNullable();
  }),

  knex.schema.createTable('cards', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.string('desc').notNullable();
    table.string('fact').notNullable();
  }),
]);

exports.down = knex => Promise.all([
  knex.schema.dropTable('users'),
  knex.schema.dropTable('cards'),
]);
