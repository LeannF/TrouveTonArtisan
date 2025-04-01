const Categorie = require("../models/Categorie");

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