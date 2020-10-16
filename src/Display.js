import React from "react";

function Display(props) {
  const zeroVal = props.addToDisplay;
  return (
    <div>
      {/* <input type="text" id="result" readOnly value={props.addToDisplay} /><br/>
            <input type="text" id="num" value={props.displayValue} /> */}
      <div id="result">{zeroVal}</div>
      <div id="num">{props.displayValue}</div>
    </div>
  );
}

export default Display;
