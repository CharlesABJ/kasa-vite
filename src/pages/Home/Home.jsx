import React from "react";
import Banner from "@/components/Banner/Banner";

// importation des assets
import homeBanner from "@/assets/images/home-banner.jpg";

function Home() {
  const bannerDatas = {
    title: "Chez vous, partout et ailleurs",
    src: homeBanner,
  };
  return (
    <main className="Home">
      <Banner bannerDatas={bannerDatas} />
    </main>
  );
}

export default Home;
