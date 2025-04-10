import Link from 'next/link';
import "./css/Footer.css";

const Footer = () => {
    return (
        <footer className="bottom-0">
            <div className="container-fluid text-center py-4">
                <div className="row">
                    <div className="col-6" id="adresse">
                        <h2>Adresse et Contact</h2>
                        <address>
                            <p>
                                101 cours Charlemagne 
                                CS 20033 
                                69269 LYON CEDEX 02
                                France
                            </p>
                            <Link href="tel:+33426734000">+33 4 26 73 40 00</Link>
                        </address>
                    </div>
                    <div className="col-6" id="pages">
                        <h2>Pages Légales</h2>
                        <Link className="col-6" href="/mentions" target="_blank">Mentions</Link>
                        <Link className="col-6" href="/donnees" target="_blank">Données Personnelles</Link>
                        <Link className="col-6" href="/accessibilite" target="_blank">Accessibilité</Link>
                        <Link className="col-6" href="/cookie" target="_blank">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;