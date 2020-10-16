import React from "react";

function Buttons(props) {
  return (
    <button
      onClick={props.onClickHandle(props.keyValue)}
      className={
        props.keyValue === "0"
          ? "zero"
          : props.type === "operator"
          ? "right"
          : props.type === "first-line"
          ? "first-line"
          : ""
      }
    >
      {props.keyValue}
    </button>
  );
}
export default Buttons;
