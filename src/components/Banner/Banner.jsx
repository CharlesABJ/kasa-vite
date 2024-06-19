import React from "react";

export default function Banner({ banner }) {
  return (
    <div className="Banner">
      {banner.title ? <h1>{banner.title}</h1> : null}
      <img src={banner.src} alt={banner.title} />
    </div>
  );
}
