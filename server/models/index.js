const Sequelize = require('sequelize');
const sequelize = require('../db/config');

const Artisan = require('./artisan');
const Specialite = require('./speciality');
const Categorie = require('./categorie');
const City = require('./city');

const db = {
  sequelize,
  Sequelize,
  Artisan,
  Specialite,
  Categorie,
  City,
};

// On appelle tous les `associate()` après que les modèles soient définis
Object.values(db).forEach((model) => {
  if (model.associate) {
    model.associate(db);
  }
});

module.exports = db;
