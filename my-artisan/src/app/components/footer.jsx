"use client";
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="position-relative bottom-0 ">
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col-md-6 col-sm-12 mt-3" id="adresse">
                        <h2>Adresse et Contact</h2>
                        <address>
                            <p>
                                101 cours Charlemagne<br/>
                                CS 20033<br/>
                                69269 LYON CEDEX 02<br/>
                                France<br/>
                            </p>
                            
                            <Link className="link" href="tel:+33426734000">+33 4 26 73 40 00</Link>
                        </address>
                    </div>
                    <div className="col-md-6 col-sm-12 mt-3" id="pages">
                        <h2>Pages Légales</h2>
                        <div >
                            <ul className="row">
                                <li className="col-md-6 p-2">
                                    <Link className="link" href="/mentions" >Mentions</Link>
                                </li>
                                <li className="col-md-6 p-2">
                                    <Link className="link" href="/donnees" >Données Personnelles</Link>
                                </li>
                                <li className="col-md-6 p-2">
                                    <Link className="link" href="/accessibilite" >Accessibilité</Link>
                                </li>
                                <li className="col-md-6 p-2">
                                    <Link className="link" href="/cookie" >Cookies</Link>
                                </li>
                            </ul>
                        </div>                      
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;