import React from "react";

export default function Banner({ bannerDatas }) {
  return (
    <div className="Banner">
      <div
        className={`overlay${bannerDatas.title ? "" : " banner-has-not-title"}`}
      ></div>
      {bannerDatas.title && <h1>{bannerDatas.title}</h1>}
      <img width="300px" src={bannerDatas.src} alt="bannière" />
    </div>
  );
}
