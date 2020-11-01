const innerHtml = (string) => {
  return <div dangerouslySetInnerHTML={{ __html: string }} />;
};

export function Arrows(props) {
  const { onUp, onLeft, onDown, onRight } = props;
  return (
    <>
      <div className="arrowTop">
        <button className="arrowGeneral arrowUP" onClick={onUp}>
          {innerHtml("&UpArrow;")}
        </button>
      </div>
      <div className="arrows">
        <button className="arrowGeneral arrowLeft" onClick={onLeft}>
          {innerHtml("&LeftArrow;")}
        </button>
        <button className="arrowGeneral arrowDown" onClick={onDown}>
          {innerHtml("&DownArrow;")}
        </button>
        <button className="arrowGeneral arrowRight" onClick={onRight}>
          {innerHtml("&RightArrow;")}
        </button>
      </div>
    </>
  );
}
