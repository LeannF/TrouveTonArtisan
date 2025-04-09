const express = require("express");
const service = require("../services/categorie")
const router = express.Router();

// ➤ Récupérer tous les utilisateurs
router.get("/", service.getCategories);
router.get("/:nomCat", service.getOneCategorie);


module.exports = router;