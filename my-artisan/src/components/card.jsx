"use client";
import "./css/Card.css"
import { useEffect, useState } from "react";


const Card = () => {
    const [artisan, setArtisans] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/artisan")
        .then((res) => res.json())
        .then((data) => setArtisans(data));
    }, []);

    return (
        <div className="row">
            <div className="card m-4 col-4">
                <div className="card-header">
                    <h2 className="card-title">Nom artisan ou entreprise</h2>
                </div>
                <div className="card-body">
                    <h3 key={artisan.id_artisan}>{artisan.nom_artisan}</h3>
                    <h3></h3>

                </div>
            </div>
            <div className="card m-4 col-4">
                <div className="card-header">
                    <h2 className="card-title">Nom artisan ou entreprise</h2>
                </div>
                <div className="card-body">
                    <h3 className="card-subtitle mb-2 text-body-secondary">Spécialité artisan</h3>
                    <h3 className="card-subtitle">Localisation Artisan</h3>

                </div>
            </div>
            <div className="card m-4 col-4">
                <div className="card-header">
                    <h2 className="card-title">Nom artisan ou entreprise</h2>
                </div>
                <div className="card-body">
                    <h3 className="card-subtitle mb-2 text-body-secondary">Spécialité artisan</h3>
                    <h3 className="card-subtitle">Localisation Artisan</h3>

                </div>
            </div>
        </div>
       
    )
}

export default Card;