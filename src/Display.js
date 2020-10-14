import React from "react";

function Display(props) {
    return (
        <div>
            <input type="text" id="result" readOnly value={props.value}/><br/>
            <input type="text" id="num" placeholder="Enter a Number" />
        </div> 
    )
}

export default Display;