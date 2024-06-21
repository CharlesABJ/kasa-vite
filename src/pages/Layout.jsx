// Importation des librairies
import React from "react";
import { Outlet } from "react-router-dom";

// Importation des composants
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

// Importation des assets
import logo from "@assets/images/logo.svg";
import footerLogo from "@assets/images/footer-logo.svg";

function Layout(props) {
  // Données représentées sous forme d'objets pour chaque composant :

  // Header
  const headerData = {
    logo: logo,
  };

  // Footer
  const footerData = {
    logo: footerLogo,
    copyright: "© 2020 Kasa. All rights reserved",
  };

  return (
    <div className="Layout">
      <Header headerData={headerData} />
      <Outlet />
      <Footer footerData={footerData} />
    </div>
  );
}

export default Layout;
