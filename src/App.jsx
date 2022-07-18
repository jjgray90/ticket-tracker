import "./App.scss";
import EmployeeDashboard from "./components/EmployeeDashboard/EmployeeDashboard";
import team from "./data/team.js";

function App() {
  return (
    <section className="app-container">
      <h1>Ticket Tracker</h1>
      <EmployeeDashboard team={team} />
    </section>
  );
}

export default App;
