import React, { useState } from "react";
import "./Counter.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  const changeCount = (symbol) => {
    if (symbol === "+") {
      setCount(count + 1);
    } else if (symbol === "-" && count > 0) {
      setCount(count - 1);
    } else return count === 0;
  };

  return (
    <div className="counter">
      <p className="counter__minus" onClick={() => changeCount("-")}>
        -
      </p>
      <p className="counter__number">{count}</p>
      <p className="counter__plus" onClick={() => changeCount("+")}>
        +
      </p>
    </div>
  );
};

export default Counter;
