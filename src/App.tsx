import "./App.css";

function App() {
  return (
    <>
      <h1>Hello there</h1>
      <Calculator></Calculator>
    </>
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
