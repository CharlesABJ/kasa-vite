import React, { useState } from "react";

// importation des assets
import arrow from "@assets/images/arrow.svg";

function Collapse({ collapseData }) {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className={`Collapse ${count % 2 === 0 ? "closed" : "open"}`}>
      <header onClick={handleClick}>
        <div className="title">{collapseData.title}</div>
        <div className="arrow">
          <img src={arrow} alt="fleche" />
        </div>
      </header>
      <div className="content">{collapseData.content}</div>
    </div>
  );
}

export default Collapse;
