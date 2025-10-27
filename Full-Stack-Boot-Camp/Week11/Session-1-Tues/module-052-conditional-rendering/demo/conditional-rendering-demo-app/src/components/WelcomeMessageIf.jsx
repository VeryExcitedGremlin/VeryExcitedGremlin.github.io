import { useState } from "react";

export default function WelcomeMessage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Variable to hold the message content
  let welcomeContent;

  // Use an if/else statement to set the content
  if (isLoggedIn) {
    welcomeContent = <h1>Welcome back!</h1>;
  } else {
    // Render nothing or a different message when not logged in
    welcomeContent = <h1>Please log in.</h1>;
  }

  return (
    <div>
      {/* Render the content determined by the if/else statement */}
      {/* we cant put if statement in here because the code must be an expression
      or return a value, not just a branch of code */}
      {/* Remember - JSX content inside the return statement must be expressions—
      chunks of code that evaluate to a value (like a string, number, array, or another JSX element). */}
      {welcomeContent}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log Out" : "Log In"}
      </button>
    </div>
  );
}
