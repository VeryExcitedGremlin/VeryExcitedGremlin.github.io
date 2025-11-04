import {StaticCounter, InteractiveCounter, ToggleSwitch} from "../Counter/counter";

export default function DisplayCounters() {
  return (
    <>
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
