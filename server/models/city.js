const { DataTypes } = require('sequelize');
const sequelize = require('../db/config'); // Importer la connexion Sequelize

const City = sequelize.define(
  'Ville',
  {
    // Model attributes are defined here
    id_ville: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nom_ville: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true, // Empêche Sequelize de modifier le nom de la table
    timestamps: false,
  },
);

City.associate = (models) => {
  City.hasMany(models.Artisan, { 
    foreignKey: "id_ville", 
  });
};

module.exports = City;