const { Artisan, Specialite, Categorie } = require('../models');

exports.getArtisans = async (req, res) => {
  try {
    // Attends que les artisans soient récupérées
    const artisans = await Artisan.findAll(); 
    
    // Envoie les artisans sous forme de réponse JSON
    res.json(artisans); 
  } catch (error) {
    console.error(error); // Logge l'erreur pour débogage
    // Envoie un message d'erreur si une exception se produit
    res.status(500).json({ message: "Artisans not found" });
  }
};

exports.getArtisanSpe = async (req, res) => {
  try {
    // Attends que les artisans soient récupérées
    const speArtisan = await Artisan.findAll({
      include: {
        model: Specialite,
        attributes: [`nom_specialite`],
      }
    });
    // Envoie les artisans sous forme de réponse JSON
    res.json(speArtisan); 
  } catch (error) {
    console.error(error); // Logge l'erreur pour débogage
    // Envoie un message d'erreur si une exception se produit
    res.status(500).json({ message: "Artisan's spe not found" });
  }
};

exports.getArtisanCat = async (req, res) => {
  try {
    // Attends que les artisans soient récupérés
    const catArtisan = await Artisan.findAll({
      include: {
        model: Categorie,
        attributes: [`nom_categorie`],
      }
    }); 
    // Envoie les artisans sous forme de réponse JSON
    res.json(catArtisan); 
  } catch (error) {
    console.error(error); // Logge l'erreur pour débogage
    res.status(500).json({ message: "Artisan's cat not found" });
  }
};

exports.getTop = async(req, res) => {
  try {
    // Attends que les artisans soient récupérées
    const topArtisan = await Artisan.findAll({
      where: {top : true}
    }); 
    
    // Envoie les artisans sous forme de réponse JSON
    res.json(topArtisan); 
  } catch (error) {
    console.error(error); // Logge l'erreur pour débogage
    // Envoie un message d'erreur si une exception se produit
    res.status(500).json({ message: "Artisan's top not found" });
  }
};