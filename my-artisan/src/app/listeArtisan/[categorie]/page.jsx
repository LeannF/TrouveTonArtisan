"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Importation de usePathname

const ListeArtisan = () => {
  const [artisans, setArtisans] = useState([]);
  const pathname = usePathname(); // Utilisation de usePathname pour récupérer l'URL

  // Extraire la catégorie du pathname
  const categorie = pathname.split("/").pop(); // La catégorie est la dernière partie du chemin

  useEffect(() => {
    if (!categorie) return; // Si aucune catégorie n'est présente, on ne fait rien

    // Fetch les artisans en fonction de la catégorie
    fetch(`http://localhost:5000/artisan/categorie/${categorie}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Artisans récupérés :", data);
        setArtisans(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des artisans :", error);
      });
  }, [categorie]); // Se déclenche chaque fois que la catégorie change

  {artisans.map((artisan, index) => {
    let colClass = 'col-md-4';

    // Si 4 cards → 2 par ligne
    if (artisans.length === 4) {
      colClass = 'col-md-6';
    }

    // Si 5 cards → 2 dernières centrées
    if (artisans.length === 5 && index >= 3) {
      colClass = 'col-md-4';
      // Centrer les deux dernières en ajoutant un offset
      if (index === 3) {
        colClass += ' offset-md-2'; // Pousse la carte vers la droite
      }
    }
  })};

  return (
    <main>
      <h1 className="text-center m-4">Liste des Artisans </h1>
      <div className="row justify-content-center">
        {artisans.length === 0 ? (
          <p>Aucun artisan trouvé pour cette catégorie.</p>
        ) : (
          artisans.map((artisan) => (
            <div key={artisan.id_artisan} className="card col-sm-12 col-md-4 m-3 mb-4" id="card-list">
              <div className="card-header">
                <h2 className="card-title">{artisan.nom_artisan}</h2>
              </div>
              <div className="card-body">
                <h3 className="card-subtitle mb-2 text-body-secondary">
                  {artisan.Specialite.nom_specialite}
                </h3>
                <h3 className="card-subtitle">{artisan.Ville.nom_ville}</h3>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default ListeArtisan;