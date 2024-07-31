import React from "react";

const List = ({ heroes }) => (
  <ul className="list">
    {heroes.map((hero) => (
      <li key={hero.id} className="list-item">
        {hero.id} - {hero.name}, {hero.biography["full-name"]}
      </li>
    ))}
  </ul>
);

export default List;
