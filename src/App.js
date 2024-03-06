import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./components/AddEmployee";

function App() {
  // State
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Caleb",
      role: "Developer",
      img: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Michelle",
      role: "Engineer",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Adam",
      role: "Manager",
      img: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Gregory",
      role: "Intern",
      img: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      name: "Sarah",
      role: "Web Developer",
      img: "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      name: "Jonathan",
      role: "Customer Success",
      img: "https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    console.log("Update employee inside of app.js");

    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    // The ...employees spread operator will add the new employee to the employees list
    setEmployees([...employees, newEmployee]);
  }

  const showEmployees = true;

  return (
    <div className="App">
      {/* Tenary operator */}
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
            {employees.map((employee) => {
              // console.log(uuidv4());
              // console.log(employee);
              return (
                <Employee
                  // Since we added our own unique id, no need of using the random id generator
                  // key={uuidv4()}
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>

          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
