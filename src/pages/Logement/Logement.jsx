import React from "react";
import { useParams } from "react-router-dom";

// Importation des composants
import Star from "@/pages/Logement/components/Star/Star";
import Host from "@/pages/Logement/components/Host/Host";
import Tag from "@/pages/Logement/components/Tag/Tag";
import Collapse from "@/components/Collapse/Collapse";

// importation des données de logements
import logements from "@datas/logements.json";

function Logement() {
  // Récupération de l'id de logement
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  // Nombre d'étoile maximum / Note maximum
  const rates = [1, 2, 3, 4, 5];

  return (
    <div className="Logement">
      <div className="cover">
        <img src={logement.cover} alt={logement.title} />
      </div>
      <h1>{logement.title}</h1>
      <h2 className="city">{logement.location}</h2>
      <div className="tags">
        {logement.tags.map((tag, index) => (
          <Tag key={index} dataTag={tag} />
        ))}
      </div>
      <div className="likes-and-host">
        <div className="likes">
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
          dataCollapse={{ title: "Equipements", content: logement.equipments }}
        />
      </div>
    </div>
  );
}

export default Logement;
