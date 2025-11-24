import { useState } from "react";
import "./App.css";
import ShoppingCartDemo from "./components/ShoppingCartDemo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ShoppingCartDemo />
    </>
  );
}

export default App;
