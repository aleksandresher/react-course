import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count was changed");
  }, [count]);
  return (
    <>
      <h1>React App</h1>

      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev - 1)}>-1</button>
    </>
  );
}

export default App;

