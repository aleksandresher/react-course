import { useEffect, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const slowFunction = function (num) {
    console.log("Calling slow function");
    for (let i = 0; i < 10000000; i++) {
      return num * 2;
    }
  };
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme changed");
  }, [themeStyles]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}

export default App;
