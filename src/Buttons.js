import React from "react";

function Buttons(props) {
  return (
    <button
      onClick={props.onClickFunction}
      className={
        props.keyValue === "0" ? "zero" : ((props.keyValue === "/" || props.keyValue === "x" || props.keyValue === "-" || props.keyValue === "+" || props.keyValue === "=" ) ? "right": (props.keyValue === "AC" || props.keyValue === "+/-" || props.keyValue === "%" ? "first-line" : ""))}
    >
      {props.keyValue}
    </button>
  );
}
export default Buttons;
