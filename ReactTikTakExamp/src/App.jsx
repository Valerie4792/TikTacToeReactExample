import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Board from "../Component/Board";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(null);

  return (
    <Board/>
   
  )
}

export default App;
