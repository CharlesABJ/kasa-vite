import React from "react";

function Host({ dataHost }) {
  return (
    <div className="Host">
      <div className="host-name">{dataHost.host.name}</div>
      <div className="host-picture">
        <img src={dataHost.host.picture} alt={dataHost.host.name} />
      </div>
    </div>
  );
}

export default Host;
