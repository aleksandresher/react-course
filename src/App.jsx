import "./App.css";
import Count from "./Count";
import { useState, useEffect, useRef } from "react";
import CountContext from "./context/CountContext";

function App() {
  const [count, setCount] = useState(0);
  // let ref = useRef(0);
  const inputRef = useRef(null);

  // function handleClick() {
  //   ref.current = ref.current + 1;
  //   alert("You clicked" + ref.current + "times!");
  // }

  function handleClick() {
    inputRef.current.focus();
  }

  useEffect(() => {
    console.log("count was changed");
  }, [count]);
  return (
    <>
      <h1>React App</h1>
      {/* <button onClick={handleClick}>Click me</button> */}
      {/*this number won't update on click  because ref does not trigger re-rendering   */}
      {/* <p>{ref.current}</p> */}

      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
      <CountContext.Provider value={count}>
        <Count />
      </CountContext.Provider>

      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>

      <button onClick={() => setCount((prev) => prev - 1)}>-1</button>
    </>
  );
}

export default App;

