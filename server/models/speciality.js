const { DataTypes } = require('sequelize');
const sequelize = require('../db/config'); // Importer la connexion Sequelize

const Specialite = sequelize.define(
  'Specialite',
  {
    // Model attributes are defined here
    id_specialite: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nom_specialite: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_categorie: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true, // Empêche Sequelize de modifier le nom de la table
    timestamps: false,
  },
);

Specialite.associate = (models) => {
  Specialite.hasMany(models.Artisan, {
    foreignKey: 'id_specialite',
    sourceKey: 'id_specialite',
  });

  Specialite.belongsTo(models.Categorie, {
    foreignKey: 'id_categorie',
    targetKey: 'id_categorie',
  });
};

module.exports = Specialite;