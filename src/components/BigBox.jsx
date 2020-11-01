import { Buttons } from "./Buttons";
import { BigBoxTemplate } from "./BigBoxTemplate";

export function BigBox(props) {
  const { matrix } = props;
  return (
    <div className="bigSquare">
      <Buttons matrix={matrix} />
      <BigBoxTemplate matrix={matrix} />
    </div>
  );
}
