import { useReducer } from "react";

function Counter() {
  // Step 1: Define the initial state
  // This is just a simple object with a count property
  const initialState = {
    count: 0,
  };

  // Step 2: Create the reducer function
  // A reducer takes the current state and an action, then returns the new state
  function counterReducer(state, action) {
    // We use a switch statement to handle different action types
    switch (action.type) {
      case "INCREMENT":
        // Return a new state object with count increased by 1
        return {
          count: state.count + 1,
        };

      case "DECREMENT":
        // Return a new state object with count decreased by 1
        return {
          count: state.count - 1,
        };

      case "RESET":
        // Return the initial state to reset everything
        return initialState;

      default:
        // If we get an unknown action type, just return the current state unchanged
        return state;
    }
  }
  // Step 3: Use the useReducer hook
  // It gives us the current state and a dispatch function to send actions
  const [state, dispatch] = useReducer(counterReducer, initialState);

  // Step 4: Create functions that dispatch actions
  // These functions are called when buttons are clicked
  function handleIncrement() {
    // Dispatch an action with type INCREMENT
    dispatch({ type: "INCREMENT" });
  }

  function handleDecrement() {
    // Dispatch an action with type DECREMENT
    dispatch({ type: "DECREMENT" });
  }

  function handleReset() {
    // Dispatch an action with type RESET
    dispatch({ type: "RESET" });
  }

  return (
    <div className="container">
      <h1>useReducer Counter</h1>

      <div className="counter-display">
        <h2>Count: {state.count}</h2>
      </div>

      <div className="button-group">
        <button onClick={handleIncrement} className="btn btn-increment">
          Add 1
        </button>
        <button onClick={handleDecrement} className="btn btn-decrement">
          Subtract 1
        </button>
        <button onClick={handleReset} className="btn btn-reset">
          Reset to 0
        </button>
      </div>

      <div className="explanation">
        <h3>How it works:</h3>
        <ol>
          <li>
            We define an initial state object: <code>{`{ count: 0 }`}</code>
          </li>
          <li>We create a reducer function that handles different actions</li>
          <li>
            We use <code>useReducer(counterReducer, initialState)</code>
          </li>
          <li>
            We dispatch actions like <code>{`{ type: 'INCREMENT' }`}</code>
          </li>
          <li>The reducer updates the state based on the action type</li>
        </ol>
      </div>

      <div className="code-preview">
        <h3>Current State:</h3>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
}

export default Counter;
