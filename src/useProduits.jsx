import { produits } from "./assets/assets";

export default function useProduits() {
  return { products: produits, loading: false };
}
