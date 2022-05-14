import React, { useState } from "react";
import Display from "./components/cardDisplay";

function App() {
  const [memory, setMemory] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <div className="App">
      <div>
        <Display memory={memory} />
      </div>
    </div>
  );
}

export default App;
