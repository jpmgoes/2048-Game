import { Score } from "./Score";
export function GameTop(props) {
  const { score, history, setScore, restartGame } = props;

  const howToPlay = () => {
    const startPlaying = document.querySelector(".gameDown");
    startPlaying.style.background = "#f3d774";
    setTimeout(() => (startPlaying.style.background = "transparent"), 1000);
  };

  return (
    <>
      <div className="gameTop">
        <h1>2048</h1>
        <Score score={score} history={history} setScore={setScore} />
        <button className="restartGame" onClick={restartGame}>
          New Game
        </button>
        <p className="topText">
          Join the tiles, get to <strong>2048!</strong> <br />
          <strong
            onClick={howToPlay}
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            How to play →
          </strong>
        </p>
      </div>
    </>
  );
}
