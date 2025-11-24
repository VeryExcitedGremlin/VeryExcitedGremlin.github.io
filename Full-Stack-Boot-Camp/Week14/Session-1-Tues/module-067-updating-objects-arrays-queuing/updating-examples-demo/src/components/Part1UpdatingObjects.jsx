// Part 1:
// Why immutibility matters and how to correctly update
// objects in react

import { useState } from "react";

export default function Part1UpdatingObjects() {
  const [user, setUser] = useState({ name: "Alice", age: 25 });
  const [count, setCount] = useState(0);

  const updateNameWrong = () => {
    console.log("WRONG: Mutating user object directly");
    user.name = "Tyrell"; // modifying the object directly
    setUser(user);
    //This wont update our page because the original reference object
    // is passed in, and React thinks you didn't change it
  };

  const updateNameRight = () => {
    console.log("RIGHT: create new user object");
    // spread is only a shallow copy of the object
    setUser({ ...user, name: "Bob" });
  };

  // show the wrong ways and right ways to update

  return (
    <>
      <h2>Updating Objects</h2>
      <div className="step-container">
        <div className="current-state">
          <h4>Current User State:</h4>
          <div className="state-display">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Age:</strong> {user.age}
            </p>
            <p>
              <strong>Updates:</strong> {count}
            </p>
          </div>
        </div>
        {/*  If we click
            1. Update Wrong Way 
            2. Increment Count
            3. We will eventually see that Bob did get updated, but this is really
            weird from a user perspective
        */}
        <div className="wrong-section">
          <h4>Wrong Way (Won't Work)</h4>
          <button onClick={updateNameWrong} className="btn-wrong">
            Update Wrong Way Name using "Tyrell"
          </button>
          <p className="warning">
            Click this and notice the name doesn't change in the UI! Check the
            console to see the mutation happening.
          </p>
          <button
            onClick={() => {
              setCount((prev) => prev + 1);
            }}
            className="btn-wrong"
          >
            Increment Count will force an update and Now "Tyrell" will show up
          </button>
        </div>

        <button onClick={updateNameRight} className="btn-right">
          Right way to update name to "Bob"
        </button>
      </div>
    </>
  );
}
