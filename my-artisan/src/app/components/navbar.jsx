"use client";
import Link from 'next/link';
import "./css/navbar.css";
import { useEffect, useState } from "react";

const Navbar = () => {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js').then((Bootstrap) => {

        });
    }, []);
    
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]); // Assurez-vous que results est un tableau vide
    const [categories, setCat] = useState([]);

    useEffect(() => {
        if (!categories) return; // Si aucune catégorie n'est présente, on ne fait rien
    
        // Fetch les artisans en fonction de la catégorie
        fetch(`http://localhost:5000/categorie/`)
          .then((res) => res.json())
          .then((data) => {
            console.log("Catégories récupérées :", data);
            setCat(data);
          })
          .catch((error) => {
            console.error("Erreur lors de la récupération des catégories :", error);
          });
      }, []); 

    const handleSearch = async (query) => {
        if (query.trim() === '') {
            setResults([]); // Si la recherche est vide, on réinitialise les résultats
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/artisan/${encodeURIComponent(query)}`);
            if (!response.ok) {
                throw new Error('Erreur de réseau');
            }
            const data = await response.json();
            setResults(Array.isArray(data) ? data : []); // S'assurer que les résultats sont bien un tableau
            console.log("Resultats: ", results)
        } catch (error) {
            console.error('Erreur lors de la récupération des données: ', error);
        }
    };

    const handleChange = (e) => {
        const query = e.target.value;
        setSearch(query);
        handleSearch(query); // Appelle l'API dès qu'il y a un changement
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler position-absolute m-2 top-0 end-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="row">
                    <div className="col-8" id="logo">
                        <Link href="/">
                            <img src="/assets/logo/logo.png" alt="Logo trouve ton artisan"/>
                        </Link>
                    </div>
                        <div className="collapse navbar-collapse col-4 end-0" id="navbarText">
                            <ul className="navbar-nav z-3 end-0">
                                {categories.map((categorie) => (
                                    <li key={categorie.id_categorie} className="nav-item">
                                        <Link className="nav-link active" href={`/listeArtisan/${categorie.nom_categorie}`}>{categorie.nom_categorie}</Link>
                                    </li>      
                                ))}
                            </ul>                    
                        </div>  
                </div>
                <div className="position-relative col-md-4 col-sm-6" id="searchBar">
                    <div className="d-flex justify-content-center position-relative">
                        <input className="form-control" type="search" placeholder="Rechercher un artisan"
                            value={search}
                            onChange={handleChange}
                        />
                        <button className="bi bi-search position-absolute end-0"></button>
                    </div>
                    {Array.isArray(results) && results.length > 0 && (
                        <ul className="position-absolute bg-white border border-gray-300 mt-1 p-2 z-2 list-group" id="resultList">
                            {results.map((artisan) => (
                                <li key={artisan.id_artisan}  className="py-2">
                                    <Link className="link" href={`/ficheArtisan/${encodeURIComponent(artisan.nom_artisan)}`} onClick={() => {setSearch(artisan.nom_artisan); setResults([]);}} >{artisan.nom_artisan}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>  
            </div>
        </nav>
    );
};

export default Navbar;
