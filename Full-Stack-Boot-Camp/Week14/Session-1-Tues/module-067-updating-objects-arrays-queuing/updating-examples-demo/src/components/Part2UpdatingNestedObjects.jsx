import { useState } from "react";

export default function Part2UpdatingNestedObjects() {
  const initialProfile = {
    personal: {
      name: "Alice",
      age: 25,
      email: "alice@example.com",
    },
    preferences: {
      theme: "dark",
      notifications: true,
      language: "en",
    },
    settings: {
      privacy: "public",
      newsletter: false,
    },
    profileId: 123,
    anotherProperty: "This is another primitive",
  };

  const [userProfile, setUserProfile] = useState(initialProfile);
  const [count, setCount] = useState(0);

  // Direct mutation - React won't detect the change
  const updateThemeWrong = () => {
    console.log("WRONG: Direct nested mutation");
    // Directly mutate the nested object - BAD!
    userProfile.preferences.theme = "light";
    // Even though we call setState, React doesn't see any change
    // because the object reference is the same
    setUserProfile(userProfile);
  };

  // RIGHT WAY - Spread all levels that change
  const updateThemeRight = () => {
    console.log("RIGHT: Spreading all nested levels");
    setUserProfile((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        theme: prev.preferences.theme === "dark" ? "light" : "dark",
      },
    }));
  };

  // Reset function to restore initial state
  const resetProfile = () => {
    setUserProfile(JSON.parse(JSON.stringify(initialProfile)));
    setCount(0);
  };

  return (
    <div className="step-container">
      <h2>Nested Objects</h2>

      <div
        className="current-state"
        style={{
          backgroundColor: userProfile.preferences.theme === "dark" ? "#2d3748" : "#f7fafc",
          color: userProfile.preferences.theme === "dark" ? "#fff" : "#000",
          transition: "all 0.3s ease",
          border: `2px solid ${userProfile.preferences.theme === "dark" ? "#4a5568" : "#e2e8f0"}`
        }}
      >
        <h3>Current State:</h3>
        <p>
          Theme: <strong>{userProfile.preferences.theme}</strong>
        </p>
        <p>
          Count: <strong>{count}</strong>
        </p>
        <button onClick={resetProfile} className="btn-reset">
          Reset Demo
        </button>
      </div>

      <div className="button-grid">
        <div className="wrong-section">
          <h4>Wrong Way - Direct Mutation</h4>
          <button onClick={updateThemeWrong} className="btn-wrong">
            Mutate Theme Directly
          </button>
          <p className="warning">
            Click this button - nothing happens! The mutation occurs but React
            doesn't detect it because the object reference stays the same.
          </p>
          <button
            onClick={() => {
              setCount((prev) => prev + 1);
            }}
            className="btn-wrong"
          >
            Force Re-render with Count
          </button>
          <p className="warning">
            Now the theme shows "light" because the mutation actually happened,
            React just didn't know about it!
          </p>
        </div>

        <div className="right-section">
          <h4>Right Way - Immutable Update</h4>
          <button onClick={updateThemeRight} className="btn-right">
            Toggle Theme Correctly
          </button>
          <p style={{ marginTop: "1rem", color: "#38a169" }}>
            This creates new objects at every nested level that changes. React
            immediately detects the change and re-renders!
          </p>
        </div>
      </div>
    </div>
  );
}
