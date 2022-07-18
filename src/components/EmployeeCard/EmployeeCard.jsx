import "./EmployeeCard.scss";
import Ticket from "../Ticket/Ticket";

const EmployeeCard = ({ name, role }) => {
  return (
    <>
      <section className="card">
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
        <Ticket />
      </section>
    </>
  );
};

export default EmployeeCard;
