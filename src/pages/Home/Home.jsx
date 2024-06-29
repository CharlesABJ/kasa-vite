import React, { useEffect, useState } from "react";
import Banner from "@/components/Banner/Banner";

// importation des assets
import homeBanner from "@/assets/images/home-banner.jpg";

// importation des données de logements pour Home
import Card from "./components/Card/Card";

// importation des données de logements pour Home
let apiLogementsUrl = "./api/logements.json";

// FAIRE LA RECUPERATION DES DONNEES AVEC UN HOOK PERSONALISE (useFetch)

function Home() {
  const [homesData, setHomesData] = useState([]);
  const [loading, setLoading] = useState(true);
  // Tableau vide = utilisation de la fonction uniquement au montage
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(apiLogementsUrl);
        const data = await response.json();
        setHomesData(data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  // Données de Banner
  const dataBanner = {
    title: "Chez vous, partout et ailleurs",
    src: homeBanner,
  };
  if (loading) return <div>Chargement...</div>;
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
