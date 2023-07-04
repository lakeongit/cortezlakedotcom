// db.js
const pgp = require('pg-promise')();
const db = pgp('postgres://username:password@localhost:5432/myDatabase');

module.exports = db;
