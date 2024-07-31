import React from "react";

const GridItem = ({ hero }) => (
  <div className="grid-item">
    <img src={hero.image.url} alt={hero.name} className="img" />
    <h3>{hero.name}</h3>
  </div>
);

export default GridItem;
