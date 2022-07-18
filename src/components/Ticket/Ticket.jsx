import React from "react";
import "./Ticket.scss";
import Counter from "../Counter/Counter";

const Ticket = () => {
  return (
    <div className="tickets">
      <p className="tickets__title">Tickets</p>
      <Counter />
    </div>
  );
};

export default Ticket;
