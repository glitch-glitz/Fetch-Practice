import { useState } from "react";

import "./App.css";
import { Table } from "./Components/Table";
import { ColorfulTable } from "./Components/ColorfulTable";
import Practice from "./Components/Practice";
import CarList from "./Components/CarList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Table />
      <ColorfulTable />
      <Practice />
      <CarList />
    </>
  );
}

export default App;
