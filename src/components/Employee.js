function Employee(props) {
  // Do not set values to props. Code below sets an error and crashes the site
  // props.name = "something";
  return (
    // Do no set values to probs. That should not be done in the child component
    // only in the parent component
    <>
      <h3>Employee {props.name}</h3>
      <p>{props.role ? props.role : "No role"}</p>
    </>
  );
}

export default Employee;
