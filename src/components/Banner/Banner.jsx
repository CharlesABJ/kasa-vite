import React from "react";

export default function Banner({ dataBanner }) {
  return (
    <div className={`Banner${dataBanner.title ? "" : " banner-has-not-title"}`}>
      <div className="overlay"></div>
      {dataBanner.title && <h1>{dataBanner.title}</h1>}
      <img loading="lazy" width="300px" src={dataBanner.src} alt="bannière" />
    </div>
  );
}
