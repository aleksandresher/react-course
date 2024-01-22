import { useReducer, useMemo, useState } from "react";
import "./App.css";
import { people as people2 } from "./data.js";
import { getImageUrl } from "./utils.js";

const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

function App() {
  const listItems = people.map((person, index) => (
    <li key={index}>{person}</li>
  ));

  const chemists = people2.filter((person) => person.profession === "chemist");

  const listItems2 = chemists.map((person) => (
    <li key={person.name}>
      <img src={getImageUrl(person)} alt={person.id} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <>
      <ul>{listItems}</ul>
      <ul>{listItems2}</ul>
    </>
  );
}

export default App;
