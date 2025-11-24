import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
  clearHistory,
} from "./store/counterSlice";

import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  // We use useSelector to grab specific pieces of state
  const count = useSelector((state) => state.counter.value);
  const history = useSelector((state) => state.counter.history);

  // Get dispatch function to send actions
  const dispatch = useDispatch();

  const handleIncrementByAmount = () => {
    const amount = parseInt(inputValue) || 0;
    if (amount !== 0) {
      dispatch(incrementByAmount(amount));
      setInputValue("");
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Redux Fundamentals Demo</h1>
        <p>Learn the basics of Redux with a simple counter example</p>
      </header>

      <main className="main-content">
        <div className="demo-section">
          <div className="demo-header">
            <h2>Simple Redux Counter</h2>
            <p>
              This demonstrates the core Redux concepts: Store, Actions, and
              Reducers
            </p>
          </div>

          <div className="demo-content">
            <div className="counter-display">
              <div className="count-value">
                Current Count: <span className="count-number">{count}</span>
              </div>
            </div>

            <div className="button-group">
              <button
                onClick={() => dispatch(decrement())}
                className="btn btn-secondary"
              >
                -1 (Decrement)
              </button>

              <button
                onClick={() => dispatch(increment())}
                className="btn btn-primary"
              >
                +1 (Increment)
              </button>

              <button
                onClick={() => dispatch(reset())}
                className="btn btn-danger"
              >
                Reset
              </button>
            </div>

            <div className="custom-increment">
              <h3>Custom Increment</h3>
              <div className="input-group">
                <input
                  type="number"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter amount..."
                  className="number-input"
                />
                <button
                  onClick={handleIncrementByAmount}
                  className="btn btn-primary"
                >
                  Add Amount
                </button>
              </div>
            </div>

            <div className="history-section">
              <div className="history-header">
                <h3>Action History</h3>
                <button
                  onClick={() => dispatch(clearHistory())}
                  className="btn btn-small"
                  disabled={history.length === 0}
                >
                  Clear History
                </button>
              </div>

              <div className="history-list">
                {history.length === 0 ? (
                  <p className="no-history">No actions performed yet</p>
                ) : (
                  history.map((action, index) => (
                    <div key={index} className="history-item">
                      {index + 1}. {action}
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="redux-state">
              <h3>Redux Store State</h3>
              <pre className="state-json">
                {JSON.stringify(
                  { counter: { value: count, history } },
                  null,
                  2
                )}
              </pre>
            </div>
          </div>

          <div className="demo-explanation">
            <h3>Redux Core Concepts Explained:</h3>
            <div className="concepts-grid">
              <div className="concept-card">
                <h4>🏪 Store</h4>
                <p>
                  The single source of truth that holds the entire state of your
                  application.
                </p>
                <code>configureStore()</code>
              </div>

              <div className="concept-card">
                <h4>🎬 Actions</h4>
                <p>
                  Plain objects that describe what happened. They are the only
                  way to send data to the store.
                </p>
                <code>dispatch(increment())</code>
              </div>

              <div className="concept-card">
                <h4>⚙️ Reducers</h4>
                <p>
                  Pure functions that specify how the state changes in response
                  to an action.
                </p>
                <code>createSlice()</code>
              </div>

              <div className="concept-card">
                <h4>🔗 React-Redux</h4>
                <p>
                  Connects React components to the Redux store using useSelector
                  and useDispatch.
                </p>
                <code>useSelector(), useDispatch()</code>
              </div>
            </div>

            <div className="flow-diagram">
              <h4>Redux Data Flow:</h4>
              <div className="flow-steps">
                <div className="flow-step">1. User clicks button</div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">2. dispatch(action)</div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">3. Reducer updates state</div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">4. Component re-renders</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
