const Categorie = require('../models');

exports.getCategories = async (req, res) => {
  try {
    // Attends que les categories soient récupérées
    const categories = await Categorie.findAll(); 
    
    // Envoie les categories sous forme de réponse JSON
    res.json(categories); 
} catch (error) {
    console.error(error); // Logge l'erreur pour débogage
    // Envoie un message d'erreur si une exception se produit
    res.status(500).json({ message: "Categories not found" });
}
};

exports.getOneCategorie = async (req, res) => {
  try {
    const {nomCat} = req.params;
    // Attends que les villes soient récupérées
    const categorie = await Categorie.findAll({
      where: {nom_categorie : nomCat}
    }); 
    
    // Envoie les artisans sous forme de réponse JSON
    res.json(categorie); 
  } catch (error) {
    console.error(error); // Logge l'erreur pour débogage
    // Envoie un message d'erreur si une exception se produit
    res.status(500).json({ message: "Categorie not found" });
  }
};