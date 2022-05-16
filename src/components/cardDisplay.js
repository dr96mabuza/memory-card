import React from "react";

import "./cardStyle.css";

function Display(props) {
  const { photoLink, description, key, onClick } = props;

  return (
    <div key={key} onClick={onClick} className="card">
      <img src={photoLink} alt={key} />
      <div>{description}</div>
    </div>
  );
}

export default Display;
