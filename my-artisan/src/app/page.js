import Card from "../components/card";

const Accueil = () => {
  return (
    <main className="text-center">
      <div className="py-2">
        <h1>Comment trouver mon artisan ?</h1>
        <ol>
          <li> Choisir la catégorie d’artisanat dans le menu</li>
          <li> Choisir un artisan</li>
          <li> Le contacter via le formulaire de contact</li>
          <li> Une réponse sera apportée sous 48h</li>
        </ol>
      </div>
      <div>
        <h2>Artisans du mois</h2>
        <Card/>
      </div>
    </main>
  );
}

export default Accueil;