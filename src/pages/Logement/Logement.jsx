import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Importation des composants
import Cover from "@/pages/Logement/components/Cover/Cover";
import Star from "@/pages/Logement/components/Star/Star";
import Host from "@/pages/Logement/components/Host/Host";
import Tag from "@/pages/Logement/components/Tag/Tag";
import Collapse from "@/components/Collapse/Collapse";

// importation des données de logements
let apiUrl = "../api/logements.json";

function Logement() {
  // Récupération de l'id de logement
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  // Tableau vide = utilisation de la fonction uniquement au montage
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const logementEnCours = data.find((logement) => logement.id === id);

        setLogement(logementEnCours);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }
    fetchData();
  }, []);

  // Nombre d'étoile maximum / Note maximum
  const rates = [1, 2, 3, 4, 5];

  //
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  if (!logement)
    return (
      <div>
        <h1>Chargement...</h1>
      </div>
    );
  return (
    <main className="Logement">
      <Cover dataCover={{ ...logement, currentPictureIndex }} />

      <h1>{logement.title}</h1>
      <h2 className="city">{logement.location}</h2>
      <div className="tags-zone">
        {logement.tags.map((tag, index) => (
          <Tag key={index} dataTag={tag} />
        ))}
      </div>
      <div className="likes-and-host">
        <div className="likes-zone">
          {rates.map((rate, index) => (
            <Star
              key={index}
              dataStar={logement.rating > rate ? " liked" : ""}
            />
          ))}
        </div>
        <Host dataHost={logement} />
      </div>

      <div className="collapses-zone">
        <Collapse
          dataCollapse={{ title: "Description", content: logement.description }}
        />
        <Collapse
          dataCollapse={{
            title: "Equipements",
            content: logement.equipments.map((equipement, index) => (
              <p key={index}>{equipement}</p>
            )),
          }}
        />
      </div>
    </main>
  );
}

export default Logement;
