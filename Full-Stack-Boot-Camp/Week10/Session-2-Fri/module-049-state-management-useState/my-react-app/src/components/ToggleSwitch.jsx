import { useState } from "react";
export default function ToggleSwitch() {
  // create a state variable called isOn using useState

  //let or const?
  const [isOn, setIsOn] = useState(false); // [value, setterFunction]

  return (
    <div>
      <div className={`switch ${isOn ? "on" : "off"}`}>
        <button onClick={() => setIsOn(!isOn)}>{isOn ? "ON" : "OFF"}</button>
      </div>
      <p>The switch is {isOn ? "ON" : "OFF"}</p>
    </div>
  );
}
