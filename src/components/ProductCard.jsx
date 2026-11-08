export default function ProductCard({ produit, ajouter }) {
  return (
    <div className="product-card">
      {produit.img ? (
        <img src={produit.img} alt={produit.nom} />
      ) : (
        <div className="no-img">Image bientôt disponible</div>
      )}
      <h3>{produit.nom}</h3>
      <p className="des">{produit.designation}</p>
      <p className="prix">{produit.prix} DH</p>
      <button onClick={() => ajouter(produit.id)}>Ajouter Panier</button>
    </div>
  );
}
