import "./EmployeeCard.scss";
import Ticket from "../Ticket/Ticket";

const EmployeeCard = ({ name, role }) => {
  return (
    <>
      <section className="card">
        <div className="card__employee">
          <p className="employee__name">Name: {name}</p>
          <p className="employee__role">Role: {role}</p>
        </div>
        <Ticket />
      </section>
    </>
  );
};

export default EmployeeCard;
