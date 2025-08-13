const { Op } = require ("sequelize");
require("dotenv").config();
const nodemailer = require('nodemailer');
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
    const artisan = await Artisan.findAll({
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
      where: {nom_artisan : {[Op.like]: `%${nomArt}%`}}
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

exports.sendEmail = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Méthode non autorisée');
  }
  const { nomArt, prenom, nom, email, objet, message } = req.body;
  try {
    // Utilisation de Op.like pour permettre une recherche partielle
    const artisan = await Artisan.findOne({ where: { nom_artisan: { [Op.like]: `%${nomArt}%` } } }); 
    if (!artisan) {
      return res.status(404).json({ message: `Aucun artisan trouvé pour le nom : ${nomArt}` });
    }
    // Les identifiants sont stockés dans des variables d'environnement pour la sécurité
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Configuration du service d'envoi d'email avec Gmail
      port: 587, // Port SMTP standard pour TLS
      secure: false, // false = utilisation de STARTTLS
      auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.EMAIL_PASS,
      },
    });
    const mailOptions = {
      from: `"${prenom} ${nom}" <${email}>`,
      to: artisan.email,
      subject: `Message de ${prenom} ${nom} - ${objet}`,
      text: `Nom: ${prenom} ${nom}\nEmail: ${email}\nObjet: ${objet}\nMessage: ${message}`,
    };
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message envoyé !' });
  } catch (err) {
    console.error("Erreur lors de l'envoi :", err);
    res.status(500).json({ message: 'Erreur : ' + err.message });
  }
};