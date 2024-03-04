import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  // How to use state
  const [role, setRole] = useState("dev");

  // Logic can be added here before the return statement
  console.log("We are about the list the employees");
  const showEmployees = true;

  return (
    // 2. Logic can then be implemented in the div below

    <div className="App">
      {/* This is a tenary operator */}
      {showEmployees ? (
        <>
          {/* <input
            type="text"
            onChange={(e) => {
              // To get what is typed in the input
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          /> */}
          <div className="flex flex-wrap justify-center">
            <Employee
              name="Jerome"
              role="Intern"
              img="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Employee
              name="Nicole"
              role={role}
              img="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Employee
              name="John"
              img="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />

            <Employee
              name="Jerome"
              role="Intern"
              img="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Employee
              name="Nicole"
              role={role}
              img="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Employee
              name="John"
              img="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />

            <Employee
              name="Jerome"
              role="Intern"
              img="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Employee
              name="Nicole"
              role={role}
              img="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Employee
              name="John"
              img="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
