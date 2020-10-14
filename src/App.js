import React, {useEffect, useState} from "react";
import Buttons from "./Buttons";
import Display from "./Display"

function App() {
    const [ currSum, setCurrSum ] = useState(0);
    const [ clear, setClear ] = useState(false);

    const Add = (e) => {
        e.preventDefault();
        if (clear) setClear(false);
        let currNum = document.querySelector("#num").value;
        if (currNum === "") return;
        let sum = currSum + parseInt(currNum);
        setCurrSum(sum);
        document.querySelector("#num").value="";
    };
    const Clear = (e) => {
        e.preventDefault();
        console.log('sum:', currSum);
        document.querySelector('form').reset();
        setClear(true);
        setCurrSum(0);
    };

    useEffect(() => {
        document.querySelector("#result").value = "";
    },[]);
    useEffect(() => {
        if(clear)
        document.querySelector("#result").value = "";
    });

    const MathSigns = (e) => {
        e.preventDefault();
        let currNum = document.querySelector("#num").value;
        let sum;
        if (document.querySelector("#result").value === "") {
            sum = currSum + parseInt(currNum);
        }
        else (sum = currSum - parseInt(currNum));
        setCurrSum(sum);
        document.querySelector("#num").value="";
    }

        return(
            <div className="app">
                <div className="app-title">
                    <h1>Simple Calculator</h1>
                </div>
                <form className="calc-wrapper">
                    {/* <input type="text" id="result" value={currSum} readOnly />
                    <input type="text" id="num" placeholder="Enter a Number" />
                    <button onClick={Add}>Add</button>
                    <button onClick={Clear}>Clear</button> */}
                
                <Display value={currSum} />
                <Buttons onClickFunction={Add} keyValue="+" />
                <Buttons onClickFunction={Clear} keyValue="C" />
                <Buttons onClickFunction={MathSigns} id="minus" keyValue="-" />
                </form>
            </div>
        )
}
export default App;