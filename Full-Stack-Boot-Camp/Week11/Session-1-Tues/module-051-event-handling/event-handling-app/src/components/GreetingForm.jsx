import { useState } from "react";

export default function GreetingForm() {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value); // Get the current input value
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
      />
      {/* display stranger if string is empty  */}
      {/* otherwise display the name the user updated on the input */}
      <p>Hello, {name || "stranger"}!</p>
    </div>
  );
}
