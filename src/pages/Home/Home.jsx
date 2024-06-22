import React from "react";
import Banner from "@/components/Banner/Banner";

// importation des assets
import homeBanner from "@/assets/images/home-banner.jpg";

// importation des données de logements pour Home
import homesData from "@/datas/logements.json";
import Card from "./components/Card/Card";

function Home() {
  // Données de Banner
  const bannerData = {
    title: "Chez vous, partout et ailleurs",
    src: homeBanner,
  };
  return (
    <main className="Home">
      <Banner bannerData={bannerData} />
      <div className="cards-zone">
        {homesData.map((homeData, index) => (
          <Card key={index} cardData={homeData} />
        ))}
      </div>
    </main>
  );
}

export default Home;
