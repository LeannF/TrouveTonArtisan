const express = require("express");
const service = require("../services/city");
const router = express.Router();

// ➤ Récupérer tous les utilisateurs
router.get("/", service.getCities);
router.get("/", service.getOneCity);

module.exports = router;