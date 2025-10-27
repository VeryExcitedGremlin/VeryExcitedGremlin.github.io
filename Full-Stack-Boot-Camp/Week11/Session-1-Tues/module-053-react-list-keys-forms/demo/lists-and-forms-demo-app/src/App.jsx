import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StaticProductList from "./components/StaticProductList";
import ProductList from "./components/ProductList";
import PizzaMenu from "./components/PizzaMenu";
import PizzaMenuUseState from "./components/PizzaMenuUseState";
import SignUpForm from "./components/SignUpForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <StaticProductList /> */}
      <ProductList />
      <PizzaMenu />
      <PizzaMenuUseState />
      <SignUpForm />
    </>
  );
}

export default App;
