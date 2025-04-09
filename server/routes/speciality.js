const express = require("express");
const service = require("../services/speciality");
const router = express.Router();

// ➤ Récupérer tous les utilisateurs
router.get("/", service.getSpecialities);
router.get("/nomSpe", service.getSpecialityByName);

module.exports = router;