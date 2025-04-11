const express = require("express");
const router = express.Router();
const service = require("../services/artisan")

// ➤ Récupérer tous les utilisateurs
router.get("/", service.getArtisans);
router.get("/:nomArt", service.getArtisanByName);
router.get("/categorie/:nomCat", service.getArtisansFromCat);

module.exports = router;