import {
  isPosibleUp,
  isPosibleDown,
  isPosibleLeft,
  isPosibleRight,
} from "../isPosible";
export function GameOver(props) {
  const { matrix } = props;
  const isGameOver = (matrix) => {
    if (
      !isPosibleUp(matrix) &&
      !isPosibleDown(matrix) &&
      !isPosibleLeft(matrix) &&
      !isPosibleRight(matrix)
    )
      return <div>GameOver</div>;
    return <></>;
  };
  return isGameOver(matrix);
}
