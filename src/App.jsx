import "./App.scss";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import team from "./data/team.js";

const teamCardsJSX = team.map((employee) => (
  <EmployeeCard name={employee.name} role={employee.role} key={employee.id} />
));

function App() {
  return (
    <>
      <h1>Ticket Tracker</h1>
      
      {teamCardsJSX}
    </>
  );
}

export default App;
