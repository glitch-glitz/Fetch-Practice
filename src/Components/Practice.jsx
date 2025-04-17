import { React, useEffect, useState } from "react";

function Practice() {
  const [table, setTable] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/table")
      .then((res) => res.json())
      .then((data) => setTable(data));
  });
  return (
    <div>
      {table.map((table) => (
        <div>{table.make}</div>
      ))}
    </div>
  );
}

export default Practice;
