import React from "react";

function Display(props) {
  const { memory } = props;

  return (
    <div>
      {memory.map((item) => {
        return <div>{item}</div>;
      })}
    </div>
  );
}

export default Display;
