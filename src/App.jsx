import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div
      onClick={() => {
        alert("Button wrapper div was clicked");
      }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          alert("first button was clicked");
        }}
      >
        Button 1
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          alert("second button was clicked");
        }}
      >
        Button 2
      </button>
    </div>
  );
}

export default App;
