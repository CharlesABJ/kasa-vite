import React from "react";

export default function Banner({ bannerData }) {
  return (
    <div className="Banner">
      <div
        className={`overlay${bannerData.title ? "" : " banner-has-not-title"}`}
      ></div>
      {bannerData.title && <h1>{bannerData.title}</h1>}
      <img width="300px" src={bannerData.src} alt="bannière" />
    </div>
  );
}
