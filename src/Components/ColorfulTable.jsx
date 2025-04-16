import React, { useEffect, useState } from "react";

export function ColorfulTable() {
  const [table, setTableData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/table") // change to match your endpoint
      .then((res) => res.json())
      .then((data) => setTableData(data));
  }, []);

  return (
    <div className="p-4">
      <table className="table-auto border-collapse border border-gray-500 w-full bg-white">
        <thead>
          <tr className="bg-amber-300 ">
            <th className="border border-gray-500 px-5  bg-blue-100py-5">
              Make
            </th>
            <th className="border border-gray-500 ">Model</th>
            <th className="border border-gray-500 ">Year</th>
            <th className="border border-gray-500 ">Color</th>
            <th className="border border-gray-500 ">Price</th>
            <th className="border border-gray-500 ">Features</th>
          </tr>
        </thead>
        <tbody>
          {table.map((table) => (
            <tr key={table.id}>
              <td className="border border-gray-500 px-1 py-2  bg-blue-100">
                {table.make}
              </td>
              <td className="border border-gray-500 bg-green-100 ">
                {table.model}
              </td>
              <td className="border border-gray-500 bg-blue-100">
                {table.year}
              </td>
              <td className="border border-gray-500 bg-green-100">
                {table.color}
              </td>
              <td className="border border-gray-500 bg-blue-100">
                ${table.price}
              </td>
              <td className="border border-gray-500 bg-green-100"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
