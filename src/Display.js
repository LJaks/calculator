import React from "react";

function Display(props) {
  const zeroVal = props.addToDisplay;
  return (
    <div>
      <div id="result">{zeroVal}</div>
      <div id="num">{props.displayValue}</div>
    </div>
  );
}

export default Display;
