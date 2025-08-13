"use client";
import { useEffect, useState } from "react";

const Card = () => {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    fetch("https://trouvetonartisan-d7k5.onrender.com/artisan")
      .then((res) => res.json())
      .then((data) => setArtisans(data));
  }, []);

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
      <div className="row justify-content-center mb-4">
        {artisans.filter((a) => a.top == true).map((artisan) => ( // récupère les artisans présents dans le top
          <div className="card col-md-4 col-sm-12 m-3 my-4 " key={artisan.id_artisan}> 
            <div className="card-header">
              <h2 className="card-title">{artisan.nom_artisan}</h2>
            </div>
            <div className="card-body">
              <div>
                <section className="p-2">
                  <span>Spécialité:</span>
                  <h3 className="card-subtitle mb-2"> {artisan.Specialite.nom_specialite}</h3>
                </section>
                <section className="p-2">
                  <span>Localistation:</span>
                  <h3 className="card-subtitle"> {artisan.Ville.nom_ville}</h3>
                </section>
              </div>
              <section className="rating">
                <span className="d-flex">{renderStars(artisan.note, artisan.id_artisan)}</span> 
              </section>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Card;