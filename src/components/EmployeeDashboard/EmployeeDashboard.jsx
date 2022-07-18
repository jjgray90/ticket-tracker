import React from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import styles from "./EmployeeDashboard.scss";

const EmployeeDashboard = ({ team }) => {
  const teamCardsJSX = team.map((employee) => (
    <EmployeeCard name={employee.name} role={employee.role} key={employee.id} />
  ));

  return <section className="employee-dashboard">{teamCardsJSX}</section>;
};

export default EmployeeDashboard;
