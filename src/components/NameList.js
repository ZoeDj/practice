import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    { id: 1, name: "Zoe", age: "36" },
    { id: 2, name: "Tom", age: "38" },
    { id: 3, name: "Nick", age: "39" },
  ];
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return <div>{personList}</div>;
}

export default NameList;
