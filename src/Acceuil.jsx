import { Link } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import useProduits from "./useProduits";

export default function Accueil({ ajouter }) {
  const { products } = useProduits();

  return (
    <div className="page-accueil">
      <section className="hero">
        <div>
          <h1>Bienvenue sur notre boutique</h1>
          <p>Découvrez nos produits et passez commande facilement.</p>
          <Link to="/produits" className="btn">Voir les produits</Link>
        </div>
        <img src="/hero.png" alt="Notre boutique" />
      </section>

      <section className="phares">
        <h2>Nos produits phares</h2>
        <div className="products-grid">
          {products.slice(0, 3).map((p) => (
            <ProductCard key={p.id} produit={p} ajouter={ajouter} />
          ))}
        </div>
      </section>
    </div>
  );
}