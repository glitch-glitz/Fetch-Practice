import React, { useEffect, useState } from "react";

function CarList({ title }) {
  const [table, setTable] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/table")
      .then((res) => res.json())
      .then((data) => setTable(data));
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      {table.map((car) => (
        <div key={car.id}>
          Model: {car.model}
          Color: {car.color}
          Year: {car.year}
        </div>
      ))}
    </div>
  );
}

export default CarList;
