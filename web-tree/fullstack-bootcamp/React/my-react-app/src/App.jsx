import HelloWorldInline from "./components/HelloWorld/HelloWorld";
import { HelloWorld } from "./components/HelloWorld/HelloWorld";
import { StaticCounter,InteractiveCounter,ToggleSwitch } from "./components/Counter/counter";

function App() {
  return (
    <>
      <h1>Module 47 - Intro to React</h1>
      <h2>Inline Styles</h2>
      <div>
        <HelloWorldInline />
        <HelloWorldInline name="Alice" />
        <HelloWorldInline name="Bob" />
        <HelloWorldInline name="Jane" />
      </div>
      <h2>CSS Stylesheet</h2>
      <div>
        <HelloWorld />
        <HelloWorld name="Alice" />
        <HelloWorld name="Bob" />
        <HelloWorld name="Jane" />
      </div>

      <h1>Module 49 - State Management</h1>
      <h2>Use State</h2>
      <h3>Static Counter - This Does Nothing</h3>
      <StaticCounter />
      <h3>Interactive Counter - This Counts</h3>
      <InteractiveCounter />
      <h3>Switch</h3>
      <ToggleSwitch />
    </>
  );
}

export default App;
