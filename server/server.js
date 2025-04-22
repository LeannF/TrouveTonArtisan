const express = require("express");
const sequelize = require("./db/config");
const artisanRouter = require("./routes/artisan");
const categorieRouter = require("./routes/categorie");
const specialityRouter = require("./routes/speciality");
const cityRouter = require("./routes/city");

const cors = require('cors');

const app = express();
app.use(express.json()); // Permet de lire le JSON dans les requêtes
app.use(cors());

// Synchroniser la base de données
sequelize.sync({ logging: false }) 
  .then()
  .catch(console.error("Erreur de synchro"));
  
app.get('/', (req, res) => {
  res.send('Bienvenue sur TrouveTonArtisan 👷‍♀️✨');
});
// Routes
app.use("/artisan", artisanRouter);
app.use("/categorie", categorieRouter);
app.use("/speciality", specialityRouter);
app.use("/city", cityRouter);

// Middleware pour gérer les routes non définies
app.use((req, res) => {
  res.status(404).json();
});

app.listen(5000);

module.exports = app;