export function BigBoxTemplate(props) {
  const { matrix } = props;
  const makeButtons = () => {
    return (
      <div className="bigBoxDefault bigBoxNoNumPosition">
        {matrix.map((arr, l) => {
          return arr.map((n, c) => {
            const style = {
              gridArea: `b${l}${c}`,
            };
            return <div className="miniBoxDefault noNum" style={style}></div>;
          });
        })}
      </div>
    );
  };
  return makeButtons();
}
