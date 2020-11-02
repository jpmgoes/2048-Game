import { isWin } from "../isPosible";
import {
  isPosibleUp,
  isPosibleDown,
  isPosibleLeft,
  isPosibleRight,
} from "../isPosible";

export function Win(props) {
  const { matrix, restartGame } = props;
  const win = document.querySelector(".winInterface");
  const youWonButton = document.querySelector(".youWonButton");

  const isGameOver = (matrix) => {
    if (
      !isPosibleUp(matrix) &&
      !isPosibleDown(matrix) &&
      !isPosibleLeft(matrix) &&
      !isPosibleRight(matrix)
    )
      return true;
  };
  if (win !== null)
    if (isWin(matrix) || isGameOver(matrix)) {
      win.style.opacity = 0.9;
      win.style.zIndex = 10;
      youWonButton.style.display = "grid";
    } else {
      youWonButton.style.display = "none";
      win.style.opacity = 0;
      win.style.zIndex = -10;
    }

  function winOrLose() {
    if (isGameOver(matrix))
      return <strong className="youWon">GAME OVER</strong>;
    if (isWin(matrix)) return <strong className="youWon">YOU WON!!!</strong>;
  }

  return (
    <div className="winInterface">
      {winOrLose()}
      <button onClick={restartGame} className="youWonButton">
        RESTART GAME
      </button>
    </div>
  );
}
