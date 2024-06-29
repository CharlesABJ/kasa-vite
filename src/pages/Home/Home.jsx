import Banner from "@/components/Banner/Banner";
import useFetch from "@/hooks/useFetch";

// importation des assets
import homeBanner from "@/assets/images/home-banner.jpg";

// importation des données de logements pour Home
import Card from "./components/Card/Card";

// importation des données de logements pour Home
let apiLogementsUrl = "./api/logements.json";

// FAIRE LA RECUPERATION DES DONNEES AVEC UN HOOK PERSONALISE (useFetch)

function Home() {
  const { data: homesData, loading } = useFetch(apiLogementsUrl);
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
