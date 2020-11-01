export function Buttons(props) {
  const { matrix } = props;

  const makeButtons = () => {
    return (
      <div className="bigBoxDefault bigBoxNoNumPosition">
        {matrix.map((arr) => {
          return arr.map((n) => {
            return <div className="miniBoxDefault noNum"></div>;
          });
        })}
      </div>
    );
  };
  return makeButtons();
}
