const { Artisan, Specialite, Categorie, City } = require('../models');

exports.getArtisans = async (req, res) => {
  try {
    // Attends que les artisans soient récupérées
    const artisans = await Artisan.findAll({
      include: [
        {
          model: City,
          attributes: [`nom_ville`],
        },
        {
          model: Specialite,
          attributes: [`nom_specialite`],
        },
        {
          model: Categorie,
          attributes: [`nom_categorie`],
        }
      ],
    }); 
    
    // Envoie les artisans sous forme de réponse JSON
    res.json(artisans); 
  } catch (error) {
    console.error(error); // Logge l'erreur pour débogage
    // Envoie un message d'erreur si une exception se produit
    res.status(500).json({ message: "Artisans not found" });
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