export function Button(props) {
  const { matrix } = props;
  const style = {
    width: "20px",
    height: "20px",
    margin: 3,
    padding: 2,
    textAlign: "center",
  };
  const matrixClone = matrix.slice().map((arr) => {
    return (
      <div>
        {arr.map((n) => {
          return <button style={style}>{n}</button>;
        })}
      </div>
    );
  });
  // console.log(matrixClone);
  return matrixClone;
}
