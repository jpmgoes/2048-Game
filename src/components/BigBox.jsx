import { BigBoxTemplate } from "./BigBoxTemplate";
import { NumDivs } from "./NumDivs";
import { Win } from "./Win";

export function BigBox(props) {
  const { matrix, restartGame } = props;
  return (
    <div className="bigSquare">
      <Win matrix={matrix} restartGame={restartGame} />
      <div className="allGameInnerDivs">
        <div className="allNumAndNoNumsDivs">
          <NumDivs matrix={matrix} />
        </div>
        <div className="allTemplateDivs">
          <BigBoxTemplate matrix={matrix} />
        </div>
      </div>
    </div>
  );
}
