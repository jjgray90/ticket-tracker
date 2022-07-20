import React from "react";
import "./Ticket.scss";
import Counter from "../Counter/Counter";

const Ticket = ({ count, changeCount }) => {
  return (
    <div className="tickets">
      <p className="tickets__title">Tickets</p>
      <Counter count={count} changeCount={changeCount} />
    </div>
  );
};

export default Ticket;
