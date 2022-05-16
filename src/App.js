import React, { useEffect, useState } from "react";
import Display from "./components/cardDisplay";
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
  { id: uniqid(), url: image1, description: "" },
  { id: uniqid(), url: image2, description: "" },
  { id: uniqid(), url: image3, description: "" },
  { id: uniqid(), url: image4, description: "" },
  { id: uniqid(), url: image5, description: "" },
  { id: uniqid(), url: image6, description: "" },
  { id: uniqid(), url: image7, description: "" },
  { id: uniqid(), url: image8, description: "" },
  { id: uniqid(), url: image9, description: "" },
  { id: uniqid(), url: image10, description: "" },
];
function App() {
  const [card, setCard] = useState(initialValues);

  const handleClick = () => {
    console.table(card);
    const randomCards = card.sort(() => Math.random() - 0.5);

    setCard(randomCards);
  };

  return (
    <div className="App">
      <div id="cardContainer">
        {card.map((item) => {
          return (
            <Display
              photoLink={item.url}
              key={item.id}
              discription={item.description}
              onClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
