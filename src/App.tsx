import "./App.css";
import Todo from "./Todo";

function App() {
  return (
    <>
      <h1>Hello there</h1>
      {/* <Student name="Yamen" roll="35"></Student> */}
      {/* <ProgrammingStat language="JavaScript" experience="10"></ProgrammingStat>
      <ProgrammingStat language="Python" experience="15"></ProgrammingStat> */}
      <Todo></Todo>
    </>
  );
}

//Components:

function ProgrammingStat(props) {
  console.log(props);
  return (
    <div className="student">
      <h4>Programming Language: {props.language}</h4>
      <h4>Experience: {props.experience}</h4>
    </div>
  );
}

function Student(props) {
  // const student = {
  //   border: "2px solid green",
  //   padding: "5px",
  //   margin: "10px",
  //   borderRadius: "5px",
  // };
  return (
    <div className="student">
      <h1>Name: {props.name}</h1>
      <h1>Roll: {props.roll}</h1>
    </div>
  );
}

function Calculator() {
  const total = 50;
  return (
    <>
      <h2>Sum: {4 + 2}</h2>
      <h2>Count: {total}</h2>
    </>
  );
}

export default App;
