import { Buttons } from "./Buttons";
import { BigBoxTemplate } from "./BigBoxTemplate";
import { Win } from "./Win";

export function BigBox(props) {
  const { matrix, restartGame } = props;

  return (
    <div className="bigSquare">
      <Win matrix={matrix} restartGame={restartGame} />
      <Buttons matrix={matrix} />
      <BigBoxTemplate matrix={matrix} />
    </div>
  );
}
