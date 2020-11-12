export function NumDivs(props) {
  const { matrix } = props;
  const color = {
    num: [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048],
    color: [
      "#eee4da",
      "#eee1c9",
      "#f3b27a",
      "#f69663",
      "#f77c60",
      "#f75f3b",
      "#edd073",
      "#edcc61",
      "#edc850",
      "#edc53f",
      "#edc22e",
    ],
    font: ["#776e65", "#fff"],
  };
  const makeButtons = () => {
    return (
      <div className="bigBoxDefault bigBoxNumPosition">
        {matrix.map((arr, l) => {
          return arr.map((n, c) => {
            if (n === null) {
              const style = {
                gridArea: `b${l}${c}`,
              };
              return (
                <div
                  className={"miniBoxDefault miniBox" + l + String(c)}
                  style={style}
                >
                  +
                </div>
              );
            }
            const index = color.num.indexOf(n);
            const style = {
              backgroundColor: color.color[index],
              color: n > 4 ? color.font[1] : color.font[0],
              cursor: "pointer",
              gridArea: `b${l}${c}`,
            };
            function anime(l, c) {
              const minibox = document.querySelector(
                ".miniBox" + l + String(c)
              );
              minibox.style.transform = "scale(1.2)";
              setTimeout(() => (minibox.style.transform = "scale(1)"), 300);
            }
            return (
              <div
                className={"miniBoxDefault miniBox" + l + String(c)}
                style={style}
                onClick={() => anime(l, c)}
              >
                {n}
              </div>
            );
          });
        })}
      </div>
    );
  };
  return makeButtons();
}
