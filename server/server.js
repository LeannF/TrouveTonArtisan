const express = require("express");
const sequelize = require("./db/config");
const artisanRouter = require("./routes/artisan");
const categorieRouter = require("./routes/categorie");
const specialityRouter = require("./routes/speciality");
const cityRouter = require("./routes/city");


const app = express();
app.use(express.json()); // Permet de lire le JSON dans les requêtes

// Synchroniser la base de données
sequelize.sync({ force: false }) // Mettre à `true` pour recréer les tables
  .then(() => console.log("✅ Base de données synchronisée"))
  .catch(err => console.error("❌ Erreur de synchro :", err));
  
// Routes
app.use("/artisan", artisanRouter);
app.use("/categorie", categorieRouter);
app.use("/speciality", specialityRouter);
app.use("/city", cityRouter);

// Middleware pour gérer les routes non définies
app.use((req, res) => {
  res.status(404).json({ message: "Route non trouvée" });
});

app.listen(3000, () => console.log("🚀 Serveur démarré sur http://localhost:3000"));

module.exports = app;