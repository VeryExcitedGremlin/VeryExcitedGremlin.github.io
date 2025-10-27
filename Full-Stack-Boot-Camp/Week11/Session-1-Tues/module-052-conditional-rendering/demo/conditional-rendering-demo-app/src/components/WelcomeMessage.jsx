import { useState } from "react";

export default function WelcomeMessage() {
  // setup user Logged in state
  // usually this is not going to be hard coded

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  return (
    <div>
      {/* If both true, render out the welcome back */}
      {isLoggedIn && <h1>Welcome back!</h1>}
      {/* add an onclick to flip the value and see the changes */}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log Out" : "Log In"}
      </button>
    </div>
  );
}
