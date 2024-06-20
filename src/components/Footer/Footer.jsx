import React from "react";

function Footer({ footerDatas }) {
  return (
    <footer className="Footer">
      <div className="logo">
        <img src={footerDatas.logo} alt="Logo Kasa Blanc" />
      </div>
      <p className="copyright">{footerDatas.copyright}</p>
    </footer>
  );
}

export default Footer;
