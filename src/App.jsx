import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Accueil from "./Acceuil";
import Produits from "./Produits";
import Contact from "./Contact";

export default function App() {

  const [panier, setPanier] = useState({}); 

  const ajouter = (id) =>
    setPanier((p) => ({ ...p, [id]: (p[id] || 0) + 1 }));

  const nbArticles = Object.values(panier).reduce((a, b) => a + b, 0);

  return (
    <Routes>
      <Route element={<Layout nbArticles={nbArticles} />}>
        <Route path="/" element={<Accueil ajouter={ajouter} />} />
        <Route path="/produits" element={<Produits ajouter={ajouter} />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
