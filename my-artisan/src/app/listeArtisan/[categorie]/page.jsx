"use client";
import Link from 'next/link';
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; 

const ListeArtisan = () => {
  const [artisans, setArtisans] = useState([]);
  const pathname = usePathname(); // Utilisation de usePathname pour récupérer l'URL

  // Extraire la catégorie du pathname
  const categorie = pathname.split("/").pop(); // La catégorie est la dernière partie du chemin

  useEffect(() => {
    if (!categorie) return; // Si aucune catégorie n'est présente, on ne fait rien

    // Fetch les artisans en fonction de la catégorie
    fetch(`https://trouvetonartisan-d7k5.onrender.com/artisan/categorie/${categorie}`)
      .then((res) => res.json())
      .then((data) => {setArtisans(data);})
  }, [categorie]); // Se déclenche chaque fois que la catégorie change

  const renderStars = (note, id_artisan) => {
    const stars = [];
  
    for (let i = 1; i <= 5; i++) {
      if (note >= i) {
        stars.push(<span key={`${id_artisan}-star-${i}`} className="bi bi-star-fill"></span>); 
      } else if (note >= i - 0.5) {
        stars.push(<span key={`${id_artisan}-star-${i}`} className="bi bi-star-half"></span>);  
      } else {
        stars.push(<span key={`${id_artisan}-star-${i}`} className="bi bi-star"></span>);
      }
    }
  
    return <>{stars}</>;
  }

  return (
    <main>
      <h1 className="text-center m-4">Liste des Artisans en {decodeURIComponent(categorie)} </h1>
      <div className="row justify-content-center">
        {artisans.length === 0 ? (
          <p>Aucun artisan trouvé pour cette catégorie.</p>
        ) : (
          artisans.map((artisan) => (
            <Link key={artisan.id_artisan} href={`/ficheArtisan/${encodeURIComponent(artisan.nom_artisan)}`} className="card col-sm-12 col-md-4 m-3 mb-4" id="card-list">
                <div className="card-header">
                  <h2 className="card-title">{artisan.nom_artisan}</h2>
                </div>
                <div className="card-body">
                  <div>
                    <section>
                      <span>Spécialité:</span>
                      <h3 className="card-subtitle mb-2 text-body-secondary"> {artisan.Specialite.nom_specialite}</h3>
                    </section>
                    <section>
                      <span>Localisation:</span>
                      <h3 className="card-subtitle"> {artisan.Ville.nom_ville}</h3>
                    </section>
                  </div>        
                  <span className="rating mt-2">{renderStars(artisan.note, artisan.id_artisan)}</span>
                </div>
            </Link>
          ))
        )}
      </div>
    </main>
  );
};

export default ListeArtisan;