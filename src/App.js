import React, { useState, useEffect, useRef } from "react";
import {
  handleRight,
  handleLeft,
  handleUp,
  handleDown,
  handleRandomValues,
} from "./handleMotion";
import { BigBox } from "./components/BigBox";
import { GameTop } from "./components/GameTop";
import { GameDown } from "./components/GameDown";
import { Arrows } from "./components/Arrows";
import "./index.css";

function App() {
  //^ Handle Matrix
  const randomMatrix = handleRandomValues();
  let lastGame = localStorage.getItem("history");
  let lastGameArr = [];
  if (lastGame) {
    lastGame = lastGame.split(",").map((a, i) => {
      if (i % 4 === 0) lastGameArr.push([]);
      if (a === "") return null;
      return Number(a);
    });
    let count = 0;
    for (let arr of lastGameArr)
      while (arr.length < 4) arr.push(lastGame[count++]);
  }

  const [matrix, setMatrix] = useState(
    lastGameArr[0] ? lastGameArr : randomMatrix
  );
  //^ Score
  const [score, setScore] = useState(
    localStorage.getItem("score") ? Number(localStorage.getItem("score")) : 0
  );
  //^ History
  const [history, setHistory] = useState();
  localStorage.setItem("score", score);
  if (history) {
    localStorage.setItem("history", history);
  }

  //^ Commands
  function up() {
    handleUp(matrix, setMatrix, setHistory, score, setScore);
  }
  function left() {
    handleLeft(matrix, setMatrix, setHistory, score, setScore);
  }
  function down() {
    handleDown(matrix, setMatrix, setHistory, score, setScore);
  }
  function right() {
    handleRight(matrix, setMatrix, setHistory, score, setScore);
  }

  const restartGame = (setMatrix, randomMatrix) => {
    setMatrix(randomMatrix);
    setHistory([]);
    setScore(0);
  };

  //!
  // function a(matrix) {
  //   let m = matrix.slice();
  //   m[0][0] = 2048;
  //   setMatrix(m);
  // }
  // function b(matrix) {
  //   setMatrix([
  //     [1, 2, 3, 4],
  //     [5, 6, 7, 8],
  //     [9, 10, 11, 12],
  //     [13, 14, 15, 16],
  //   ]);
  // }
  //!
  //^ commands
  useKey("KeyW", up);
  useKey("KeyA", left);
  useKey("KeyS", down);
  useKey("KeyD", right);
  useKey("ArrowUp", up);
  useKey("ArrowRight", right);
  useKey("ArrowDown", down);
  useKey("ArrowLeft", left);

  //^ Render
  return (
    <React.Fragment>
      <div className="bigBoxWithArrows">
        <GameTop
          score={score}
          history={history}
          setScore={setScore}
          restartGame={() => restartGame(setMatrix, randomMatrix)}
        />
        <BigBox
          matrix={matrix}
          restartGame={() => restartGame(setMatrix, randomMatrix)}
        />
        <Arrows onUp={up} onLeft={left} onDown={down} onRight={right} />
      </div>
      {/* <button onClick={() => a(matrix)}>win</button>
      <button onClick={() => b(matrix)}>lose</button> */}
      <GameDown />
    </React.Fragment>
  );
}

export default App;
function useKey(key, callback) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    function handle(event) {
      if (event.code === key) callbackRef.current(event);
    }
    document.addEventListener("keypress", handle);
    return () => document.removeEventListener("keypress", handle);
  }, [key]);
}
