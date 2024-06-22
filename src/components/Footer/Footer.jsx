import React from "react";

function Footer({ dataFooter }) {
  return (
    <footer className="Footer">
      <div className="logo">
        <img src={dataFooter.logo} alt="Logo Kasa Blanc" />
      </div>
      <p className="copyright">{dataFooter.copyright}</p>
    </footer>
  );
}

export default Footer;
