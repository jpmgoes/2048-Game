import React, { useState, useEffect, useRef, createContext } from "react";
import {
  handleRight,
  handleLeft,
  handleUp,
  handleDown,
  handleRandomValues,
} from "./gameLogic/handleMotion";
import { BigBox } from "./components/BigBox";
import { GameTop } from "./components/GameTop";
import { GameDown } from "./components/GameDown";
import { Arrows } from "./components/Arrows";
import "./index.css";

//$  Context
export const ScoreContext = createContext();

function App() {
  //$  Handle Matrix
  const randomMatrix = handleRandomValues();

  let lastGame = JSON.parse(localStorage.getItem("history"));

  const [matrix, setMatrix] = useState(
    lastGame && lastGame[0] ? lastGame : randomMatrix
  );

  //$  Score
  const [score, setScore] = useState(
    localStorage.getItem("score") ? Number(localStorage.getItem("score")) : 0
  );
  localStorage.setItem("score", score);

  //$  History
  const [history, setHistory] = useState();
  if (history) localStorage.setItem("history", JSON.stringify(history));

  //$  Commands
  function changeArrow(className) {
    const arrow = document.querySelector("." + className);
    if (arrow) {
      arrow.style.background = "#9b8e84";
      setTimeout(() => (arrow.style.background = "#eee4da"), 150);
    }
  }

  const args = { matrix, setMatrix, setHistory, setScore };

  function up() {
    handleUp(args);
    changeArrow("arrowUP");
  }
  function left() {
    handleLeft(args);
    changeArrow("arrowLeft");
  }
  function down() {
    handleDown(args);
    changeArrow("arrowDown");
  }
  function right() {
    handleRight(args);
    changeArrow("arrowRight");
  }

  const restartGame = (setMatrix, randomMatrix) => {
    setMatrix(randomMatrix);
    setHistory([]);
    setScore(0);
  };

  //=> test win and game over - start
  // function a(matrix) {
  //   let m = matrix.slice();
  //   m[0][0] = 2048;
  //   setMatrix(m);
  // }
  // function b() {
  //   setMatrix([
  //     [2, 4, 8, 16],
  //     [32, 64, 128, 256],
  //     [512, 1024, 2, 4],
  //     [8, 16, 32, 64],
  //   ]);
  // }
  //=> test win and game over - end

  //$  Commands
  useKey("KeyW", up);
  useKey("KeyA", left);
  useKey("KeyS", down);
  useKey("KeyD", right);

  //$  Render
  return (
    <React.Fragment>
      <div className="allGame">
        <div className="bigBoxWithArrows">
          <ScoreContext.Provider value={{ score, history, setScore }}>
            <GameTop restartGame={() => restartGame(setMatrix, randomMatrix)} />
          </ScoreContext.Provider>
          <BigBox
            matrix={matrix}
            restartGame={() => restartGame(setMatrix, randomMatrix)}
          />
          <div className="allArrows">
            <Arrows onUp={up} onLeft={left} onDown={down} onRight={right} />
          </div>
        </div>

        {/* <button onClick={() => a(matrix)} className="wLB"> win </button>  */}
        {/* <button onClick={() => b(matrix)} className="wLB"> lose </button> */}

        <GameDown />
      </div>
      <div className="footBar">
        <a target="_blank" rel="noreferrer" href="https://github.com/jpmourag">
          🕹 MADE BY JPMOURAG
        </a>
      </div>
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
