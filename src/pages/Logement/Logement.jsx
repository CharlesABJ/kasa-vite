import React, { useState } from "react";
import useFetch from "@/hooks/useFetch";
import { useParams } from "react-router-dom";

// Importation des composants
import Cover from "@/pages/Logement/components/Cover/Cover";
import Star from "@/pages/Logement/components/Star/Star";
import Host from "@/pages/Logement/components/Host/Host";
import Tag from "@/pages/Logement/components/Tag/Tag";
import Collapse from "@/components/Collapse/Collapse";
import Error404 from "@/pages/Error404/Error404";

// importation des données de logements
let apiLogementsUrl = "../api/logements.json";

function Logement() {
  // Récupération de l'id de logement
  const { id } = useParams();
  const { data: logement, loading, error } = useFetch(apiLogementsUrl, id);

  // Nombre d'étoile maximum / Note maximum
  const rates = [1, 2, 3, 4, 5];

  if (loading) return <h1>Chargement...</h1>;

  if (error) return <div>Erreur lors de la récupération des données</div>;
  if (!logement) return <Error404 />;
  return (
    <main className="Logement">
      <Cover dataCover={logement} />

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
