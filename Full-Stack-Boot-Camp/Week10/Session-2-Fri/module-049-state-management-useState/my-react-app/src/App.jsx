import "./App.css";
import InteractiveCounter from "./components/InteractiveCounter";
import StaticCounter from "./components/StaticCounter";
import ToggleSwitch from "./components/ToggleSwitch";

function App() {
  return (
    <>
      <StaticCounter />
      <InteractiveCounter />
      <ToggleSwitch />
    </>
  );
}

export default App;
