import { useState } from "react";
import ProductCard from "./components/ProductCard";
import useProduits from "./useProduits";

export default function Produits({ ajouter }) {
  const { products, loading } = useProduits();
  const [recherche, setRecherche] = useState("");

  const produitsFiltres = products.filter((p) =>
    p.nom.toLowerCase().includes(recherche.toLowerCase().trim())
  );

  return (
    <div className="page-produits">
      <h2>Produits</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search By Product Name"
          aria-label="Rechercher un produit"
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
        />
        <button type="button" aria-label="Rechercher">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
        </button>
      </div>

      <div className="products-grid">
        {loading && <p>Chargement...</p>}
        {produitsFiltres.map((p) => (
          <ProductCard key={p.id} produit={p} ajouter={ajouter} />
        ))}
        {!loading && produitsFiltres.length === 0 && <p>Aucun produit trouvé.</p>}
      </div>
    </div>
  );
}
