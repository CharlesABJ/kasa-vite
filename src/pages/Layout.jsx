import React from "react";
import { Outlet } from "react-router-dom";

// Importation des composants
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

// Importation des assets
import logo from "@assets/images/logo.svg";
import footerLogo from "@assets/images/footer-logo.svg";

function Layout() {
  // Données de Header
  const dataHeader = {
    logo: logo,
  };

  // Données de Footer
  const dataFooter = {
    logo: footerLogo,
    copyright: "© 2020 Kasa. All rights reserved",
  };

  return (
    <div className="Layout">
      <Header dataHeader={dataHeader} />
      <Outlet />
      <Footer dataFooter={dataFooter} />
    </div>
  );
}

export default Layout;
