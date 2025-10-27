import { useState } from "react";
export default function EventExplorer() {
  const [eventInfo, setEventInfo] = useState("");

  const handleMouseMove = (event) => {
    setEventInfo(`Mouse at: (${event.clientX}, ${event.clientY})`);
  };

  const handleKeyPress = (event) => {
    // have to comments this out to see InputChange and vice versa
    // setEventInfo(`You pressed: "${event.key}"`);
  };

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    setEventInfo(`Input "${name}" (${type}): "${value}"`);
  };

  return (
    <div>
      <div
        onMouseMove={handleMouseMove}
        style={{ height: "100px", background: "#f0f0f0" }}
      >
        Move your mouse here!
      </div>

      <input
        name="username"
        type="text"
        onKeyUp={handleKeyPress}
        onChange={handleInputChange}
        placeholder="Type something..."
      />

      <p>Event Info: {eventInfo}</p>
    </div>
  );
}
