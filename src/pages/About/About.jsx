import React from "react";
import Banner from "@/components/Banner/Banner";

// importation des assets
import aboutBanner from "@/assets/images/about-banner.jpg";

function About() {
  const bannerDatas = {
    src: aboutBanner,
  };
  return (
    <main>
      <Banner bannerDatas={bannerDatas} />
    </main>
  );
}

export default About;
