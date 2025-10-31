import { useState } from "react";

export function StaticCounter() {
  const count = 0; //never changes!

  return (
    <div>
      <h4>Count: {count}</h4>
      <button>-</button> {/* Does nothing! */}
      <button>+</button>
    </div>
  );
}

export function InteractiveCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h4>Count: {count}</h4>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
        <div className={`switch ${isOn ? 'on' : 'off'}`}>
            <button onClick={() => setIsOn(!isOn)}>{isOn ? 'ON' : 'OFF'}</button>
        </div>
        <p>The Switch is {isOn ? 'ON' : 'OFF'}</p>
    </div>
    );
}
