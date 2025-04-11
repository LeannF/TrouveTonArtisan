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

exports.getArtisanByName = async(req, res) => {
  try {
    const {nomArt} = req.params;
    // Attends que l'artisan soit récupéré
    const artisan = await Artisan.findOne({
      where: {nom_artisan : nomArt}
    }); 
    
    // Envoie l'artisan sous forme de réponse JSON
    res.json(artisan); 
  } catch (error) {
    console.error(error); // Logge l'erreur pour débogage
    // Envoie un message d'erreur si une exception se produit
    res.status(500).json({ message: "Artisan not found" });
  }
}

exports.getArtisansFromCat = async(req, res) => {
  try{
    const {nomCat} = req.params;
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
          where: {nom_categorie: nomCat},
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