import React from "react";
import { Link } from "react-router-dom";

export const Filter = () => {
  const regions = ["Africa", "America", "Asia", "Europe", "Ocenia"];

  regions(
    <details className="region-list">
      <summary>Filter by Region</summary>
      {regions &&
        regions.map((item) => {
          <Link to=":continent">{item}</Link>;
        })}
    </details>
  );
};
