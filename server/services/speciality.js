const {Specialite} = require('../models');

exports.getSpecialities = async (req, res) => {
  try {
    // Attends que les categories soient récupérées
    const specialities = await Specialite.findAll(); 
    
    // Envoie les categories sous forme de réponse JSON
    res.json(specialities); 
  } catch (error) {
    console.error(error); // Logge l'erreur pour débogage
    // Envoie un message d'erreur si une exception se produit
    res.status(500).json({ message: "Specialities not found" });
  }
};

exports.getSpecialityByName = async (req, res) => {
  try {
    const {nomSpe} = req.params;
    // Attends que les villes soient récupérées
    const speArtisan = await Specialite.findAll({
      where: {nom_specialite : nomSpe}
    }); 
    
    // Envoie les artisans sous forme de réponse JSON
    res.json(speArtisan); 
  } catch (error) {
    console.error(error); // Logge l'erreur pour débogage
    // Envoie un message d'erreur si une exception se produit
    res.status(500).json({ message: "Artisan's spe not found" });
  }
};
