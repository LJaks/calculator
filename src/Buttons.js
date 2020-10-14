import React from "react";

function Buttons(props) {
    return (
    <button onClick={props.onClickFunction}>{props.keyValue}</button>
    )
}
export default Buttons;