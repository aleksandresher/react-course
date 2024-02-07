import { useState, useEffect } from "react";

const Text = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);
  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} />
      <h1>{text}</h1>
    </div>
  );
};

export default Text;
