import "./App.css";

function App() {
  return (
    <>
      <h1>Hello there</h1>
      <Student></Student>
      <Student></Student>
      <Student></Student>
    </>
  );
}

//Components:
function Student() {
  const student = {
    border: "2px solid green",
    padding: "5px",
    margin: "10px",
    borderRadius: "5px",
  };
  return (
    <div className="student">
      <h1>Name</h1>
      <h1>Roll:</h1>
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
