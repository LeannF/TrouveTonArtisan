"use client";
import Link from 'next/link';
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';


const FicheArtisan = () => {
  const pathname = usePathname(); // Utilisation de usePathname pour récupérer l'URL
  const artisanName  = decodeURIComponent(pathname.split("/").pop());
  const [artisan, setArtisan] = useState(null);
  
  useEffect(() => {
    if (!artisanName) return; // attend que l'URL soit dispo
  
    fetch(`http://localhost:5000/artisan/${encodeURIComponent(artisanName)}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setArtisan(data[0]); // Si un artisan est trouvé, on le sélectionne
        } else {
          setArtisan(null); // Aucune correspondance
        }
      })
  }, [artisanName]);

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
  };

  // States pour le formulaire
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [objet, setObjet] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêcher le rechargement de la page

    const data = {
      prenom,
      nom,
      email,
      objet,
      message,
      nomArt: artisan.nom_artisan 
    };
  
    try {
      const res = await fetch(`http://localhost:5000/artisan/${encodeURIComponent(artisanName)}/sendEmail`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
  
      // Assure que la réponse est en JSON
      const result = await res.json();
      alert(result.message); // Affiche le message reçu du serveur
    } catch (error) {
      alert("Une erreur est survenue lors de l'envoi de l'email.");
    }
  };

  return (
    <main>
      <h1 className="text-center m-4">Fiche de l'Artisan</h1>
      <div className="mb-4">
        {artisan === null ? (
          <p>Aucun artisan de ce nom trouvé.</p>
        ) : (
            <div key={artisan.id_artisan}>
              <div className="card m-auto mb-4" id="artisanCard">
                <div className="card-header">
                  <h2 className="card-title">{artisan.nom_artisan}</h2>
                </div>
                <div className="card-body">
                  <div>
                    <section>
                      <span>Spécialité:</span>
                      <h3 className="card-subtitle mb-2 text-body-secondary">{artisan.Specialite.nom_specialite}</h3>
                    </section>
                    <section>
                      <span>Localisation:</span>
                      <h3 className="card-subtitle"> {artisan.Ville.nom_ville}</h3>
                    </section>
                  </div>
                  <span className="rating">{renderStars(artisan.note, artisan.id_artisan)}</span>
                </div>
                <div className="card-footer text-center">
                {artisan.lien_site ? (
                  <Link href={artisan.lien_site} target="_blank" rel="noopener noreferrer">
                    {artisan.lien_site}
                  </Link>
                ) : (
                  <p>Aucun site disponible</p>
                )} 
                </div>
              </div>
              <section className="text-box p-5">
                <p className=" mx-4">{artisan.apropos}</p>
              </section>
            </div>       
        )}
      </div>
      <div>
        <h2>Formulaire de contact</h2>
        <form onSubmit={handleSubmit}>
          <section className="mb-3 ">
            <label htmlFor="firstname" className="form-label">Prénom</label>
            <input type="firstname" className="form-control" id="firstname" placeholder="Prénom" onChange={(e) => setPrenom(e.target.value)}/>
          </section>

          <section className="mb-3">
            <label htmlFor="name" className="form-label">Nom</label>
            <input type="text" className="form-control" id="name" placeholder="Nom" onChange={(e) => setNom(e.target.value)}/>
          </section>

          <section className="mb-3">
            <label htmlFor="email" className="form-label">Adresse mail</label>
            <input type="email" className="form-control" id="email" placeholder="Objet du mail" onChange={(e) => setEmail(e.target.value)}/>
          </section>

          <section className="mb-3">
            <label htmlFor="object" className="form-label">Objet</label>
            <input type="text" className="form-control" id="object" placeholder="Entrez l'objet de votre message" onChange={(e) => setObjet(e.target.value)}/>
          </section>

          <section className="mb-3">
            <label htmlFor="message" className="form-label">Votre message</label>
            <textarea className="form-control" id="message" placeholder="Ecrivez votre message pour l'artisan" rows="3" onChange={(e) => setMessage(e.target.value)}/>
          </section>

          <button type="submit" className="btn btn-primary mb-3">Envoyer</button>
        </form>
      </div>
    </main>
  );
};

export default FicheArtisan;