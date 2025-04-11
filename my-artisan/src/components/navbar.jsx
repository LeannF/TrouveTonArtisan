"use client";
import Link from 'next/link';
import "./css/Navbar.css";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]); // Assurez-vous que results est un tableau vide
    const router = useRouter();

    const handleSearch = async (query) => {
        if (query.trim() === '') {
            setResults([]); // Si la recherche est vide, on réinitialise les résultats
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/artisan/search?q=${encodeURIComponent(query)}`);
            if (!response.ok) {
                throw new Error('Erreur de réseau');
            }
            const data = await response.json();
            setResults(Array.isArray(data) ? data : []); // S'assurer que les résultats sont bien un tableau
        } catch (error) {
            console.error('Erreur lors de la récupération des données: ', error);
        }
    };

    const handleChange = (e) => {
        const query = e.target.value;
        setSearch(query);
        handleSearch(query); // Appelle l'API dès qu'il y a un changement
    };

    const handleRedirect = () => {
        if (search.trim()) {
            // Redirige vers la page des résultats avec le paramètre de recherche
            router.push(`/ficheArtisan/${encodeURIComponent(search)}`);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg z-2">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="row">
                    <div className="col-8" id="logo">
                        <img src="/assets/logo/logo.png" alt="Logo trouve ton artisan" />
                    </div>
                    <div className="col-4 collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" href="/listeArtisan/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" href="/listeArtisan/fabrication">Fabrication</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" href="/listeArtisan/alimentation">Alimentation</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" href="/listeArtisan/batiment">Bâtiment</Link>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex end-0" role="search" onSubmit={(e)=>{e.preventDefault(); handleRedirect();}}>
                        <input className="form-control" type="search" placeholder="Rechercher un artisan"
                            value={search}
                            onChange={handleChange}
                            aria-label="Search"
                        />
                        {Array.isArray(results) && results.length > 0 && (
                            <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 mt-2 rounded-lg shadow-lg z-10">
                                {results.map((artisan) => (
                                    <li key={artisan.id_artisan} onClick={() => { setSearch(artisan.nom_artisan); handleRedirect(); }} className="p-2 hover:bg-gray-200 cursor-pointer">
                                        {artisan.nom_artisan}
                                    </li>
                                ))}
                            </ul>
                        )}
                        <button className="btn" type="submit">Rechercher un artisan</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
