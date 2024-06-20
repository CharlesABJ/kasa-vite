import React from "react";

function Footer({ footerData }) {
  return (
    <footer className="Footer">
      <div className="logo">
        <img src={footerData.logo} alt="Logo Kasa Blanc" />
      </div>
      <p className="copyright">{footerData.copyright}</p>
    </footer>
  );
}

export default Footer;
