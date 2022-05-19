import React from "react";

import "./cardStyle.css";

function Display(props) {
  const { list, cardClick } = props;

  return (
    <div id="cardContainer">
      {list.map((item) => {
        return (
          <div
            key={item.id}
            className="card"
            onClick={() => {
              cardClick(item);
            }}
          >
            <img src={item.url} alt={item.description} />
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Display;
