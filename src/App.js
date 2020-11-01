import React, { useState, useEffect } from "react";
import {
  handleRight,
  handleLeft,
  handleUp,
  handleDown,
  handleRandomValues,
} from "./handleMotion";
import { Button } from "./components/buttons";

function App() {
  const randomMatrix = handleRandomValues();
  const [matrix, setMatrix] = useState(randomMatrix);
  const [history, setHistory] = useState(matrix);

  return (
    <React.Fragment>
      <div>
        <button onClick={() => handleUp(matrix, setMatrix, setHistory)}>
          Top
        </button>
      </div>
      <div>
        <button onClick={() => handleLeft(matrix, setMatrix, setHistory)}>
          Left
        </button>
        <button onClick={() => handleRight(matrix, setMatrix, setHistory)}>
          Right
        </button>
      </div>
      <button onClick={() => handleDown(matrix, setMatrix, setHistory)}>
        Down
      </button>
      <Button matrix={matrix} />
      {console.log(history)}
    </React.Fragment>
  );
}

export default App;
