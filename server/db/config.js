const { Sequelize } = require("sequelize");
require("dotenv").config(); // Charger les variables d'environnement

const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASS, 
  {
    host: process.env.DB_HOST, 
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
