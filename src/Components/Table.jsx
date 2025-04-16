import React from "react";
import { useEffect, useState } from "react";
export function Table() {
  const [table, setTableData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/table")
      .then((res) => res.json())
      .then((data) => setTableData(data));
  }, []);

  //     fetch("http://localhost:3000/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     // body:JSON.stringify(tableData),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       // handlFetch()
  //     });

  console.log(table);
  return (
    <div>
      <table>
        <tbody>
          <tr>
            {table.map((table) => (
              <td>{table.make}</td>
            ))}
          </tr>
          <tr>
            {table.map((table) => (
              <td>{table.year}</td>
            ))}
          </tr>
          <tr>
            {table.map((table) => (
              <td>{table.price}</td>
            ))}
          </tr>
          <tr>
            {table.map((table) => (
              <td>{table.features}</td>
            ))}
          </tr>
          <tr>
            {table.map((table) => (
              <td>{table.model}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
