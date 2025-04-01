const { DataTypes } = require('sequelize');
const sequelize = require('../db/config'); // Importer la connexion Sequelize

const Categorie = sequelize.define(
  'Categorie',
  {
    // Model attributes are defined here
    id_categorie: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nom_categorie: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true, // Empêche Sequelize de modifier le nom de la table
    timestamps: false,
  },
);

module.exports = Categorie;