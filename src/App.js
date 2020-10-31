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
  // const [matrix, setMatrix] = useState([
  //   [1, 2, 3, 4],
  //   [1, 2, 3, 4],
  //   [1, 2, 3, 4],
  //   [1, 2, 3, 4],
  // ]);
  const [matrix, setMatrix] = useState(randomMatrix);
  return (
    <>
      <div>
        <button onClick={() => handleUp(matrix, setMatrix)}>Top</button>
      </div>
      <div>
        <button onClick={() => handleLeft(matrix, setMatrix)}>Left</button>
        <button onClick={() => handleRight(matrix, setMatrix)}>Right</button>
      </div>
      <button onClick={() => handleDown(matrix, setMatrix)}>Down</button>
      <Button matrix={matrix} />
    </>
  );
}

export default App;
