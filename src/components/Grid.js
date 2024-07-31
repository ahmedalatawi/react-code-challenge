import React from "react";
import GridItem from "./GridItem";

const Grid = ({ heroes }) => (
  <div className="grid">
    {heroes.map((hero) => (
      <GridItem key={hero.id} hero={hero} />
    ))}
  </div>
);

export default Grid;
