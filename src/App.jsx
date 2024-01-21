import "./App.css";
import Count from "./Count";
import { useState, useEffect } from "react";
import CountContext from "./context/CountContext";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count was changed");
  }, [count]);
  return (
    <>
      <h1>React App</h1>
      <CountContext.Provider value={count}>
        <Count />
      </CountContext.Provider>

      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>

      <button onClick={() => setCount((prev) => prev - 1)}>-1</button>
    </>
  );
}

export default App;

