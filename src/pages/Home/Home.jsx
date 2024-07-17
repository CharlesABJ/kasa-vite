import Banner from "@/components/Banner/Banner";
import useFetch from "@/hooks/useFetch";

// importation des assets
import homeBanner from "@/assets/images/home-banner.jpg";

// importation des données de logements pour Home
import Card from "./components/Card/Card";

// importation des données de logements pour Home
let apiLogementsUrl = "/api/logements.json";

function Home() {
  const { data: homesData, loading, error } = useFetch(apiLogementsUrl);
  // Données de Banner
  const dataBanner = {
    title: "Chez vous, partout et ailleurs",
    src: homeBanner,
  };
  if (loading) return <h1>Chargement...</h1>;
  if (error) return <div>Erreur lors de la récupération des données</div>;
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
