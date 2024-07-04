import React, { useRef, useState } from "react";

// importation des assets
import arrow from "@assets/images/arrow.svg";

function Collapse({ dataCollapse }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`Collapse ${isOpen ? "open" : "closed"}`}>
      <header onClick={handleClick}>
        <div className="title">{dataCollapse.title}</div>
        <div className="arrow">
          <img src={arrow} alt="fleche" />
        </div>
      </header>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0px",
        }}
        className="content"
      >
        <div className="content-inner">{dataCollapse.content}</div>
      </div>
    </div>
  );
}

export default Collapse;
