import React from "react";

function ScoreDisplay(props) {
  const { score, highScore } = props;

  return (
    <div>
      <div>current score: {score}</div>
      <div>highest : {highScore}</div>
    </div>
  );
}

export default ScoreDisplay;
