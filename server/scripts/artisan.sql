--
-- Base de données : `artisan`
--
DROP DATABASE IF EXISTS `Artisans`;
CREATE DATABASE IF NOT EXISTS `Artisans`;
USE `Artisans`;


-- Suppression des tables dans le bon ordre
DROP TABLE IF EXISTS `artisan`;
DROP TABLE IF EXISTS `specialite`;
DROP TABLE IF EXISTS `categorie`;
DROP TABLE IF EXISTS `ville`;


--
-- Structure de la table categorie
--

CREATE TABLE IF NOT EXISTS `categorie` (
    `id_categorie` int AUTO_INCREMENT,
    `nom_categorie` varchar(50) NOT NULL,
    PRIMARY KEY (`id_categorie`),
    KEY `nom_categorie` (`nom_categorie`)
);

--
-- Structure de la table specialite
--

CREATE TABLE IF NOT EXISTS `specialite` (
    `id_specialite` int AUTO_INCREMENT,
    `nom_specialite` varchar(50) NOT NULL,
    `id_categorie` int NOT NULL,
    PRIMARY KEY (`id_specialite`),
    KEY `nom_specialite` (`nom_specialite`),
    FOREIGN KEY (`id_categorie`) REFERENCES categorie(`id_categorie`) ON DELETE CASCADE
);

--
-- Structure de la table ville
--

CREATE TABLE IF NOT EXISTS `ville`(
    `id_ville` int AUTO_INCREMENT,
    `nom_ville` varchar(100) NOT NULL,
    PRIMARY KEY (`id_ville`),
    KEY `nom_ville` (`nom_ville`)
);

--
-- Structure de la table artisan
--

CREATE TABLE IF NOT EXISTS `artisan` (
    `id_artisan` int AUTO_INCREMENT,
    `nom_artisan` varchar(100) NOT NULL,
    `id_specialite` int NOT NULL,
    `note` decimal(5,2),
    `id_ville` int NOT NULL,
    `apropos` ,
    `email` varchar(100) NOT NULL,
    `lien_site` varchar(100),
    `id_categorie` int NOT NULL,
    `top` BOOLEAN DEFAULT 0,
    PRIMARY KEY (`id_artisan`),
    FOREIGN KEY (`id_specialite`) REFERENCES specialite(`id_specialite`) ON DELETE CASCADE,
    FOREIGN KEY (`id_ville`) REFERENCES ville(`id_ville`) ON DELETE CASCADE,
    FOREIGN KEY (`id_categorie`) REFERENCES categorie(`id_categorie`) ON DELETE CASCADE,
    UNIQUE KEY `nom_artisan` (`nom_artisan`),
    UNIQUE KEY `email` (`email`),
    UNIQUE KEY `lien_site` (`lien_site`)
);
