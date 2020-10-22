import React, { useState } from "react";
import Buttons from "./Buttons";
import Display from "./Display";

function App() {
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleClick = (keyValue) => () => {
    const num = parseFloat(value);

    if (keyValue === "AC") {
      setValue("0");
      setMemory(null);
      setOperator(null);
      return;
    }
    if (keyValue === "+/-") {
      setValue((num * -1).toString());
      setMemory(num);
      return;
    }
    if (keyValue === "%") {
      setValue(num / 100);
      setMemory(num);
      return;
    }
    if (keyValue === ",") {
      if (value.includes(".")) return;
      setValue(value + ".");
      return;
    }

    if (keyValue === "=") {
      if (!operator) return;
      if (operator === "/") {
        setValue((memory / num).toString());
      } else if (operator === "x") {
        setValue((memory * num).toString());
      } else if (operator === "-") {
        setValue((memory - num).toString());
      } else if (operator === "+") {
        setValue((memory + num).toString());
      }
      setMemory(null);
      setOperator(null);
      return;
    }
    if (keyValue === "/") {
      if (operator === "+") {
        setMemory(memory + num);
      } else if (operator === "-") {
        setMemory(memory - num);
      } else if (operator === "x") {
        setMemory(memory * num);
      } else if (operator === "/") {
        setMemory(memory / num);
      } else {
        setMemory(num);
      }
      setValue("0");
      setOperator("/");
      return;
    }
    if (keyValue === "x") {
      if (operator === "+") {
        setMemory(memory + num);
      } else if (operator === "-") {
        setMemory(memory - num);
      } else if (operator === "x") {
        setMemory(memory * num);
      } else if (operator === "/") {
        setMemory(memory / num);
      } else {
        setMemory(num);
      }
      setValue("0");
      setOperator("x");
      return;
    }
    if (keyValue === "-") {
      if (operator === "+") {
        setMemory(memory + num);
      } else if (operator === "-") {
        setMemory(memory - num);
      } else if (operator === "x") {
        setMemory(memory * num);
      } else if (operator === "/") {
        setMemory(memory / num);
      } else {
        setMemory(num);
      }
      setValue("0");
      setOperator("-");
      return;
    }
    if (keyValue === "+") {
      if (operator === "+") {
        setMemory(memory + num);
      } else if (operator === "-") {
        setMemory(memory - num);
      } else if (operator === "x") {
        setMemory(memory * num);
      } else if (operator === "/") {
        setMemory(memory / num);
      } else {
        setMemory(num);
      }
      setValue("0");
      setOperator("+");
      return;
    }
    if (value[value.length - 1] === ".") {
      setValue(value + keyValue);
    } else {
      setValue(parseFloat(num + keyValue).toString());
    }
  };

  return (
    <div className="app">
      <div className="app-title">
        <h1>Simple Calculator</h1>
      </div>
      <div className="calc-wrapper">
        <Display
          className="display"
          displayValue={value}
          addToDisplay={operator === null ? value : memory + operator}
        />
        <div className="buttons">
          <Buttons
            onClickHandle={handleClick}
            keyValue="AC"
            type="first-line"
          />
          <Buttons
            onClickHandle={handleClick}
            keyValue="+/-"
            type="first-line"
          />
          <Buttons onClickHandle={handleClick} keyValue="%" type="first-line" />
          <Buttons onClickHandle={handleClick} keyValue="/" type="operator" />
          <Buttons onClickHandle={handleClick} keyValue="7" />
          <Buttons onClickHandle={handleClick} keyValue="8" />
          <Buttons onClickHandle={handleClick} keyValue="9" />
          <Buttons onClickHandle={handleClick} keyValue="x" type="operator" />
          <Buttons onClickHandle={handleClick} keyValue="4" />
          <Buttons onClickHandle={handleClick} keyValue="5" />
          <Buttons onClickHandle={handleClick} keyValue="6" />
          <Buttons onClickHandle={handleClick} keyValue="-" type="operator" />
          <Buttons onClickHandle={handleClick} keyValue="1" />
          <Buttons onClickHandle={handleClick} keyValue="2" />
          <Buttons onClickHandle={handleClick} keyValue="3" />
          <Buttons onClickHandle={handleClick} keyValue="+" type="operator" />
          <Buttons onClickHandle={handleClick} keyValue="0" />
          <Buttons onClickHandle={handleClick} keyValue="," />
          <Buttons onClickHandle={handleClick} keyValue="=" type="operator" />
        </div>
      </div>
    </div>
  );
}
export default App;
