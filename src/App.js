import React, { useState } from "react";
import {
  handleRight,
  handleLeft,
  handleUp,
  handleDown,
  handleRandomValues,
} from "./handleMotion";
import { BigBox } from "./components/BigBox";
import { GameOver } from "./components/GameOver";
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
        <GameOver matrix={matrix} />
        <BigBox matrix={matrix} />
        <Arrows onUp={up} onLeft={left} onDown={down} onRight={right} />
      </div>
      <GameDown />
    </React.Fragment>
  );
}

export default App;
