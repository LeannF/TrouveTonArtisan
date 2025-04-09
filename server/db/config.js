const { Sequelize } = require("sequelize");
require("dotenv").config(); // Charger les variables d'environnement

const sequelize = new Sequelize(
  process.env.DB_NAME,   // DB_NAME 'artisans',
  process.env.DB_USER,    // DB_USER 'LeyLey',
  process.env.DB_PASS,   // DB_PASS 'LeyLey2',
  {
    host: process.env.DB_HOST, // DB_HOST 'localhost',
    dialect: "mysql",
  }
);

async function testConnection() {
  try {
    await sequelize.authenticate(); // Vérifie la connexion à la BDD
    console.log("✅ Connexion à la BDD réussie !");
  } catch (error) {
    console.error("❌ Erreur de connexion :", error);
  }
}

testConnection();

module.exports = sequelize;
