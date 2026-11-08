import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ nbArticles }) {
  return (
    <div className="app">
      <Header nbArticles={nbArticles} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
