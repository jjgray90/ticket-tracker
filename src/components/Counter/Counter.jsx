import "./Counter.scss";

const Counter = ({ count, changeCount }) => {
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
