"use client";
import Link from 'next/link';
import "./css/Navbar.css";
import { useEffect, useState } from "react";

const Navbar = () => {

    return(
        <nav className="navbar navbar-expand-lg z-2">
            <div className="container-fluid">
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="row">
                    <div className="col-8" id="logo">
                        <img src="/assets/logo/logo.png" alt="Logo trouve ton artisan" />
                    </div>
                    <div className="col-4 collapse navbar-collapse " id="navbarText">  
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link active" href="/listeArtisan/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" href="/listeArtisan?categorie=services">Fabrication</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" href="/listeArtisan?categorie=alimentation">Alimentation</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" href="/listeArtisan?categorie=batiment">Bâtiment</Link>
                            </li>
                        </ul>
                    </div>       
                </div>
                <form className="d-flex position-relative end-0" role="search">
                    <input className="form-control" type="search" placeholder="Rechercher un artisan" aria-label="Search"/>
                    <button className="btn" type="submit">Rechercher un artisan</button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar;