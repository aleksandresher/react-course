import { useState } from "react";
import "./App.css";

function App() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  function handleChange(field, value) {
    setPerson((prev) => ({
      ...prev,
      [field]: value,
    }));
  }
  return (
    <div>
      <label>
        First name:
        <input
          value={person.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
        />
      </label>
      <label>
        Last name:
        <input
          value={person.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          value={person.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
      </label>
      <p>
        {person.firstName} {person.lastName} {person.email}
      </p>
    </div>
  );
}

export default App;
