import React from "react";
import Banner from "@/components/Banner/Banner";

// importation des assets
import homeBanner from "@/assets/images/home-banner.jpg";

// importation des données de logements pour Home
import homesData from "@/datas/logements.json";
import Card from "@pages/Home/components/Card/Card";

function Home() {
  // Données de Banner
  const dataBanner = {
    title: "Chez vous, partout et ailleurs",
    src: homeBanner,
  };
  return (
    <main className="Home">
      <Banner dataBanner={dataBanner} />
      <div className="cards-zone">
        {homesData.map((homeData, index) => (
          <Card key={index} dataCard={homeData} />
        ))}
      </div>
    </main>
  );
}

export default Home;
