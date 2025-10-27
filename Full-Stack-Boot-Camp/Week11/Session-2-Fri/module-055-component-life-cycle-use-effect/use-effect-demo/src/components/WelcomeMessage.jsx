import { useEffect } from "react";
import { useState } from "react";

export default function WelcomeMessage() {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState("");

  //This runs after every render

  useEffect(() => {
    console.log("Component Rendered!");
    setMessage("Welcome to our app!");
  });

  return (
    <>
      <h1>{message}</h1>
      <input
        type="text"
        name="customMessage"
        id="customMessage"
        onChange={(e) => setCount(count + 1)}
      />
    </>
  );
}
