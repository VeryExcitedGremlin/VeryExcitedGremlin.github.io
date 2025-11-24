import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Part1UpdatingObjects from "./components/Part1UpdatingObjects";
import Part2UpdatingNestedObjects from "./components/Part2UpdatingNestedObjects";
import Part3UpdatingArrays from "./components/Part3UpdatingArrays";
import Part4FunctionalUpdates from "./components/Part4FunctionalUpdates";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Part1UpdatingObjects /> */}
      <Part2UpdatingNestedObjects />
      {/* <Part3UpdatingArrays /> */}
      {/* <Part4FunctionalUpdates /> */}
    </>
  );
}

export default App;
