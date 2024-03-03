import "./App.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  // How to use state
  const [role, setRole] = useState("dev");

  // let role = "dev";

  // Logic can be added here before the return statement
  console.log("We are about the list the employees");
  const showEmployees = true;

  return (
    // 1. Only 1 div can be allowed here
    // 2. Logic can then be implemented in the div below

    <div className="App">
      {/* This is a tenary operator */}
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              // To get what is typed in the input
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <Employee name="Jerome" role="Intern" />
          <Employee name="Nicole" role={role} />
          <Employee name="John" />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
