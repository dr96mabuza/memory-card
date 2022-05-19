import React, { useEffect, useState } from "react";
import Display from "./components/cardDisplay";
import ScoreDisplay from "./components/score";
import uniqid from "uniqid";

import image1 from "./components/Images/image-1.jpg";
import image2 from "./components/Images/image-2.jpg";
import image3 from "./components/Images/image-3.jpg";
import image4 from "./components/Images/image-4.jpg";
import image5 from "./components/Images/image-5.jpg";
import image6 from "./components/Images/image-6.jpg";
import image7 from "./components/Images/image-7.jpg";
import image8 from "./components/Images/image-8.jpg";
import image9 from "./components/Images/image-9.jpg";
import image10 from "./components/Images/image-10.jpg";

const initialValues = [
  { id: uniqid(), url: image1, description: "image1" },
  { id: uniqid(), url: image2, description: "image2" },
  { id: uniqid(), url: image3, description: "image3" },
  { id: uniqid(), url: image4, description: "image4" },
  { id: uniqid(), url: image5, description: "image5" },
  { id: uniqid(), url: image6, description: "image6" },
  { id: uniqid(), url: image7, description: "image7" },
  { id: uniqid(), url: image8, description: "image8" },
  { id: uniqid(), url: image9, description: "image9" },
  { id: uniqid(), url: image10, description: "image10" },
];
function App() {
  const [card, setCard] = useState(initialValues);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [selected, setSelected] = useState([]);

  const handleClick = (object) => {
    const findObjectInSelected = selected.some((item) => {
      return item === object.id;
    });

    if (findObjectInSelected === false) {
      setSelected(selected.concat(object.id));
      setScore(score + 1);
    }
    if (findObjectInSelected === true) {
      setHighScore(score);
      setScore(0);
      setSelected([]);
    }
  };

  const shuffleArray = () => {
    const shuffled = card.sort(() => Math.random() - 0.5);
    setCard(shuffled);
  };

  useEffect(() => {
    shuffleArray();
  }, [score]);

  return (
    <div className="App">
      <ScoreDisplay score={score} highScore={highScore} />
      <Display list={card} cardClick={handleClick} />
    </div>
  );
}

export default App;
