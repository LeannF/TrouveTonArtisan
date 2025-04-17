"use client";
import Link from 'next/link';
import "./css/footer.css";

const Footer = () => {
    return (
        <footer className="position-relative bottom-0">
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col-md-6 col-sm-12 mt-3" id="adresse">
                        <h2>Adresse et Contact</h2>
                        <address className="p-0">
                            101 cours Charlemagne<br/>
                            CS 20033<br/>
                            69269 LYON CEDEX 02<br/>
                            France<br/>
                            <Link className="mt-2 link" href="tel:+33426734000">+33 4 26 73 40 00</Link>
                        </address>
                    </div>
                    <div className="col-md-6 col-sm-12 mt-3" id="pages">
                        <h2>Pages Légales</h2>
                        <div className="row">
                            <Link className="col-md-6 p-2 link" href="/mentions" target="_blank">Mentions</Link>
                            <Link className="col-md-6 p-2 link" href="/donnees" target="_blank">Données Personnelles</Link>
                            <Link className="col-md-6 p-2 link" href="/accessibilite" target="_blank">Accessibilité</Link>
                            <Link className="col-md-6 p-2 link" href="/cookie" target="_blank">Cookies</Link>
                        </div>
                       
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;