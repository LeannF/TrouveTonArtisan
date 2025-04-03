const express = require("express");
const service = require("../services/speciality");
const router = express.Router();

// ➤ Récupérer tous les utilisateurs
router.get("/", service.getSpecialities);
router.get("/", service.getOneSpeciality);

module.exports = router;