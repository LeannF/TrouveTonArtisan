import Card from "./components/card";

const Accueil = () => {
  return (
    <main>
      <div className="container-fluid py-2 my-4">
        <h1>Comment trouver mon artisan ?</h1>
        <ol>
          <li className="p-2">Choisir la catégorie d’artisanat dans le menu</li>
          <li className="p-2">Choisir un artisan</li>
          <li className="p-2">Le contacter via le formulaire de contact</li>
          <li className="p-2">Une réponse sera apportée sous 48h</li>
        </ol>
      </div>
      <div className="container-fluid">
        <h2>Artisans du mois</h2>
        <Card/>
      </div>
    </main>
  );
}

export default Accueil;