import { isWin } from "../isPossible";
import { isPossible } from "../isPossible";

export function Win(props) {
  const { matrix, restartGame } = props;
  const win = document.querySelector(".winInterface");
  const youWonButton = document.querySelector(".youWonButton");

  const isGameOver = (matrix) => {
    if (
      !isPossible(matrix, "v", 0, 1, 0) &&
      !isPossible(matrix, "v", 3, -1, 0) &&
      !isPossible(matrix, "h", 0, 0, 1) &&
      !isPossible(matrix, "h", 3, 0, -1)
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
