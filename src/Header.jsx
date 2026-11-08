import { NavLink } from "react-router-dom";

export default function Header({ nbArticles }) {
  return (
    <header className="header">
      <div className="logo">Logo Product</div>

      <nav>
        <NavLink to="/" end>Accueil</NavLink>
        <NavLink to="/produits">Produits</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <div className="panier">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="9" cy="20" r="1.5" />
          <circle cx="18" cy="20" r="1.5" />
          <path d="M2 3h3l2.6 12.4a1 1 0 0 0 1 .8h9.2a1 1 0 0 0 1-.8L21 7H6" />
        </svg>
        Panier
        <span className="badge">{nbArticles}</span>
      </div>
    </header>
  );
}
