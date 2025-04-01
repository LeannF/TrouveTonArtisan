const { DataTypes } = require('sequelize');
const sequelize = require('../db/config'); // Importer la connexion Sequelize

const Artisan = sequelize.define(
  'Artisan',
  { 
    id_artisan: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nom_artisan: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    id_specialite: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    note: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    id_ville: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apropos: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    lien_site: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true,
      },
    },
    id_categorie: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    top: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    freezeTableName: true, // Empêche Sequelize de modifier le nom de la table
    timestamps: false,
  },
);

module.exports = Artisan;