import { useState } from "react";

export default function WelcomeMessage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {/* Ternary operator: (condition) ? (if true) : (if false) */}
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        // Render something else when false, or 'null' to render nothing
        <h1>Please log in.</h1>
      )}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log Out" : "Log In"}
      </button>
    </div>
  );
}
