import { Buttons } from "./Buttons";
import { BigBoxTemplate } from "./BigBoxTemplate";
import { Win } from "./Win";

export function BigBox(props) {
  const { matrix, restartGame } = props;
  return (
    <div className="bigSquare">
      <Win matrix={matrix} restartGame={restartGame} />
      <div className="allGameInnerDivs">
        <div className="allNumAndNoNumsDivs">
          <BigBoxTemplate matrix={matrix} />
        </div>
        <div className="allTemplateDivs">
          <Buttons matrix={matrix} />
        </div>
      </div>
    </div>
  );
}
