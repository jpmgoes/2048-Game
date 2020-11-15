import React, { useContext } from 'react'
import { ScoreContext } from "../App";

export function Score() {
  const { score, history, setScore } = useContext(ScoreContext)

  let bestScore = localStorage.getItem("bestScore");
  
  if (bestScore < score) {
    
    bestScore = score;
    localStorage.setItem("bestScore", bestScore);
  }
  
  if (history) {
    setScore(Number(localStorage.getItem("score")));
  }

  const style = {
    fontSize: "0.8rem",
    color: "#eee4da",
  };

  return (
    <>
      <div className="scoreboard">
        <div className="score scoreBase">
          <div style={style}>SCORE</div> {score}
        </div>
        <div className="best scoreBase">
          <div style={style}>BEST</div>
          {bestScore || 0}
        </div>
      </div>
    </>
  );
}
