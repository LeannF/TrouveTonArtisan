"use client";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

const FicheArtisan = () => {
  const pathname = usePathname(); // Utilisation de usePathname pour récupérer l'URL
  const artisan  = decodeURIComponent(pathname.split("/").pop()); // nom_artisan depuis l'URL
  const [artisans, setArtisans] = useState([]);

  
  useEffect(() => {
    if (!artisan) return; // attendre que l'URL soit dispo

      fetch(`http://localhost:5000/artisan/${encodeURIComponent(artisan)}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Artisan récupéré :", data);
          setArtisans(Array.isArray(data) ? data : [data]);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des artisans :", error);
        });

  }, [artisan]);

  return (
    <main>
      <h1 className="text-center m-4">Fiche de l'Artisan</h1>
      <div>
        {artisans.length === 0 ? (
          <p>Aucun artisan de ce nom trouvé.</p>
        ) : (
          artisans.map((artisan) => (
            <div key={artisan.id_artisan} className="card m-auto mb-4">
              <div className="card-header">
                <h2 className="card-title">{artisan.nom_artisan}</h2>
              </div>
              <div className="card-body">
                <span>{artisan.note}</span>
                <h3 className="card-subtitle mb-2 text-body-secondary">
                  {artisan.Specialite.nom_specialite}
                </h3>
                <h3 className="card-subtitle">{artisan.Ville.nom_ville}</h3>
                <p>{artisan.lien_site}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <div>
        <h2>Formulaire de contact</h2>
        <div className="m-auto" id="form">
          <section className="mb-3 col-sm-12">
            <label htmlFor="firstname" className="form-label">Prénom</label>
            <input type="firstname" className="form-control" id="firstname" placeholder="Prénom"/>
          </section>
          <section className="mb-3">
            <label htmlFor="name" className="form-label">Nom</label>
            <input type="name" className="form-control" id="name" placeholder="Nom"/>
          </section>
          <section className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
          </section>
          <section className="mb-3">
            <label htmlFor="message" className="form-label">Example textarea</label>
            <textarea className="form-control" id="message" rows="3"></textarea>
          </section>
        </div>
      </div>
    </main>
  );
};

export default FicheArtisan;