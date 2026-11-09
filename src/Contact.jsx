import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useProduits from "./useProduits";

const SERVICE_ID = "service_xxxxxxx";  
const TEMPLATE_ID = "template_xxxxxxx"; 
const PUBLIC_KEY = "xxxxxxxxxxxxxxxx";   

export default function Contact() {
  const form = useRef();
  const { products } = useProduits();
  const [statut, setStatut] = useState(""); 

  const envoyer = (e) => {
    e.preventDefault();
    setStatut("envoi");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, { publicKey: PUBLIC_KEY })
      .then(() => {
        setStatut("ok");
        form.current.reset();
      })
      .catch(() => setStatut("erreur"));
  };

  return (
    <div className="page-contact">
      <h2>Formulaire contact</h2>
      <p className="intro">Écrivez-nous : votre message nous parvient directement par email.</p>

      <form ref={form} onSubmit={envoyer}>
        <label>
          Nom client
          <input type="text" name="user_name" required />
        </label>

        <label>
          Email client
          <input type="email" name="user_email" required />
        </label>

        <label>
          Produit concerné
          <select name="produit" required defaultValue="">
            <option value="" disabled>-- Choisir un produit --</option>
            {products.map((p) => (
              <option key={p.id} value={p.nom}>{p.nom}</option>
            ))}
          </select>
        </label>

        <label>
          Message
          <textarea name="message" placeholder="Commentaire..." rows="6" required />
        </label>

        <button type="submit" disabled={statut === "envoi"}>
          {statut === "envoi" ? "Envoi..." : "Envoyer"}
        </button>

        {statut === "ok" && <p style={{ color: "green" }}>Message envoyé </p>}
        {statut === "erreur" && <p style={{ color: "red" }}>Erreur, réessaie </p>}
      </form>
    </div>
  );
}
