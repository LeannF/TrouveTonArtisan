const Speciality = require("../models/Speciality");

exports.getSpecialities = async (req, res) => {
    try {
        // Attends que les categories soient récupérées
        const specialities = await Speciality.findAll(); 
        
        // Envoie les categories sous forme de réponse JSON
        res.json(specialities); 
    } catch (error) {
        console.error(error); // Logge l'erreur pour débogage
        // Envoie un message d'erreur si une exception se produit
        res.status(500).json({ message: "Specialities not found" });
    }
};

exports.getOneSpeciality = async (req, res) => {
    try {
      const speciality = await Speciality.findOne();
      res.json(speciality);
    } catch (error) {
      res.status(500).json({message: "Speciality not found"});
    }
};