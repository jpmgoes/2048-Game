import React, { useState } from "react";
import {
  handleRight,
  handleLeft,
  handleUp,
  handleDown,
  handleRandomValues,
} from "./handleMotion";
import { Button } from "./components/buttons";
import { GameOver } from "./components/GameOver";

function App() {
  const randomMatrix = handleRandomValues();
  const [matrix, setMatrix] = useState(randomMatrix);
  const [history, setHistory] = useState(matrix);

  const restartGame = (setMatrix, randomMatrix) => {
    setMatrix(randomMatrix);
  };

  const innerHtml = (string) => {
    return <div dangerouslySetInnerHTML={{ __html: string }} />;
  };

  return (
    <React.Fragment>
      <button onClick={() => restartGame(setMatrix, randomMatrix)}>
        New Game
      </button>
      <GameOver matrix={matrix} />
      <Button matrix={matrix} />
      <div>
        <button onClick={() => handleUp(matrix, setMatrix, setHistory)}>
          {innerHtml("&UpArrow;")}
        </button>
      </div>
      <div>
        <button onClick={() => handleLeft(matrix, setMatrix, setHistory)}>
          {innerHtml("&LeftArrow;")}
        </button>
        <button onClick={() => handleRight(matrix, setMatrix, setHistory)}>
          {innerHtml("&RightArrow;")}
        </button>
      </div>
      <button onClick={() => handleDown(matrix, setMatrix, setHistory)}>
        {innerHtml("&DownArrow;")}
      </button>
      {console.log(history)}
    </React.Fragment>
  );
}

export default App;
