export function Button(props) {
  const { matrix } = props;
  const style = {
    width: "20px",
    height: "20px",
    margin: 0,
    padding: 3,
    textAlign: "center",
    border: "none",
    border: "solid 1px #000",
    backgroundColor: "#fff",
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
