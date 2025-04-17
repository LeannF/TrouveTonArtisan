"use client";
import '../globals.css';
import { useEffect, useState } from "react";

const Card = () => {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/artisan")
      .then((res) => res.json())
      .then((data) => setArtisans(data));
  }, []);

  return (
    <main>
      <div className="row justify-content-center">
        {artisans.filter((a) => a.top == true).map((artisan) => (
          <div className="card col-md-4 col-sm-12 m-3 my-4 " key={artisan.id_artisan}>
            <div className="card-header">
              <h2 className="card-title">{artisan.nom_artisan}</h2>
            </div>
            <div className="card-body">
              <h3 className="card-subtitle mb-2 text-body-secondary">
                {artisan.Specialite.nom_specialite}
              </h3>
              <h3 className="card-subtitle">
                {artisan.Ville.nom_ville}
              </h3>
              <span>{artisan.note}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Card;