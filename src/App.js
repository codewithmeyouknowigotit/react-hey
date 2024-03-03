import "./App.css";
import Employee from "./components/Employee";

function App() {
  // Logic can be added here before the return statement
  console.log("We are about the lost teh employees");
  const showEmployees = false;

  return (
    // 1. Only 1 div can be allowed here
    // 2. Logic can then be implemented in the div below

    <div className="App">
      {/* This is a tenary operator */}
      {showEmployees ? (
        <>
          <Employee />
          <Employee />
          <Employee />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
