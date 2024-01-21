import { useReducer, useMemo, useState } from "react";
import "./App.css";

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     default:
//       throw new Error();
//   }
// }

function App() {
  // const [state, dispatch] = useReducer(reducer, 0);
  const [count, setCount] = useState(60);

  {
    /* lets you cache the result of a calculation between re-renders. */
  }
  const expensiveCount = useMemo(() => {
    return count ** 2;
  }, [count]);
  return (
    <>
      <p>{count}</p>
      {/* Count: {state}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button> */}
    </>
  );
}

export default App;

