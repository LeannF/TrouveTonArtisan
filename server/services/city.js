const City = require("../models/City");

exports.getCities = async (req, res) => {
    try {
        // Attends que les villes soient récupérées
        const cities = await City.findAll(); 
        
        // Envoie les villes sous forme de réponse JSON
        res.json(cities); 
    } catch (error) {
        console.error(error); // Logge l'erreur pour débogage
        // Envoie un message d'erreur si une exception se produit
        res.status(500).json({ message: "Cities not found" });
    }
};