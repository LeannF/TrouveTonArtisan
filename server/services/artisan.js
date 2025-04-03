const Artisan = require("../models/Artisan");

exports.getArtisans = async (req, res) => {
  try {
    // Attends que les artisans soient récupérés
    const artisans = await Artisan.findAll(); 
    
    // Envoie les artisans sous forme de réponse JSON
    res.json(artisans); 
  } catch (error) {
    console.error(error); // Logge l'erreur pour débogage
    // Envoie un message d'erreur si une exception se produit
    res.status(500).json({ message: "Artisans not found" });
  }
};

exports.getOneArtisan = async (req, res) => {
  try {
    const artisan = await Artisan.findOne();
    res.json(artisan);
  } catch (error) {
    res.status(500).json({message: "Artisan not found"});
  }
};