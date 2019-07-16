const environment = process.env.NODE_ENV || 'development';
const configuation = require('../knexfile')[environment];
module.exports = require('knex')(configuation);
