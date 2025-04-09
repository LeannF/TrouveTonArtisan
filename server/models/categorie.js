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

Categorie.associate = (models) => {
  Categorie.hasMany(models.Artisan, {
    foreignKey: 'id_categorie',
    sourceKey: 'id_categorie',
  });

  Categorie.hasMany(models.Specialite, {
    foreignKey: 'id_categorie',
    sourceKey: 'id_categorie',
  });
};


module.exports = Categorie;