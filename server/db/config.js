const { Sequelize } = require("sequelize");
require("dotenv").config(); // Charger les variables d'environnement

const sequelize = new Sequelize(
  'artisans',  // DB_NAME
  'LeyLey',    // DB_USER
  'LeyLey2',   // DB_PASS
  {
    host: 'localhost',
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
