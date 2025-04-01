"use client"; 
import { useEffect, useState } from "react";
import { getArtisans } from "../services/artisan";

const App = () => {
  const [artisans, setArtisans] = useState([]);
  const [nameArtisan, setNameArtisan] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchArtisans();
  }, []);

  async function fetchArtisans() {
    const data = await getArtisans();
    console.log("Données artisans :", data); 
    setArtisans(data || []);
  }

  return (
    <div>
      <h1>Liste des Utilisateurs</h1>
      <input placeholder="Nom" value={nameArtisan} onChange={(e) => setNameArtisan(e.target.value)} />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

      {artisans.length === 0 ? (
      <p>Chargement...</p>
    ) : (
      <ul>
        {artisans.map((artisan) => (
          <li key={artisan.id}>{artisan.name}</li>
        ))}
      </ul>
    )}
    </div>
  );
}

export default App;
