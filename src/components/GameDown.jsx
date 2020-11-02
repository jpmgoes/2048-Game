export function GameDown() {
  const startPlaying = () => {
    const bigBox = document.querySelector(".bigSquare");
    setTimeout(() => (bigBox.style.background = "#f3d774"), 100);
    setTimeout(() => (bigBox.style.background = "#bbada0"), 1000);
  };
  return (
    <div className="gameDown">
      <strong>HOW TO PLAY:</strong> Use your <strong>W A S D</strong> to move
      the tiles <strong>or hit the arrow keys above</strong>. Tiles with the
      same number <strong>merge into one</strong> when they touch. Add them up
      to reach <strong>2048!</strong>
      <br />
      <strong
        onClick={startPlaying}
        style={{ textDecoration: "underline", cursor: "pointer" }}
      >
        Start playing →
      </strong>
    </div>
  );
}
