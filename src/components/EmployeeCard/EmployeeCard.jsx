import { useState } from "react";
import "./EmployeeCard.scss";
import Ticket from "../Ticket/Ticket";

const EmployeeCard = ({ name, role }) => {
  const [count, setCount] = useState(0);
  const [modifier, setModifier] = useState("");

  const changeCount = (symbol) => {
    if (symbol === "+") {
      setCount(count + 1);
      checkCount(count + 1);
    } else if (symbol === "-" && count > 0) {
      setCount(count - 1);
      checkCount(count - 1);
    } else return count === 0;
  };

  const checkCount = (tickets) => {
    if (tickets < 3) {
      setModifier("");
    } else if (tickets < 6) {
      setModifier("warning");
    } else {
      setModifier("alert");
    }
  };

  return (
    <>
      <section className={`card  card--${modifier}`}>
        <div className="card__employee">
          <div className="employee">
            <p className="employee__label">Name</p>
            <p className="employee__content">{name}</p>
          </div>
          <div className="employee">
            <p className="employee__label">Role</p>
            <p className="employee__content">{role}</p>
          </div>
        </div>
        <Ticket count={count} changeCount={changeCount} />
      </section>
    </>
  );
};

export default EmployeeCard;
