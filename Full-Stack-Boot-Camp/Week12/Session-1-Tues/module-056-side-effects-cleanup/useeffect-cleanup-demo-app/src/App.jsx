import { useState } from "react";
import "./App.css";
import BadTimer from "./components/BadTimer";
import GoodTimer from "./components/GoodTimer";

function App() {
  // State to control mounting/unmounting of timer demos
  const [showBadTimer, setShowBadTimer] = useState(false);
  const [showGoodTimer, setShowGoodTimer] = useState(false);

  return (
    <>
      <h1>useEffect Cleanup Demo</h1>
      <p>Open your browser console (F12) to see what happens with and without cleanup functions.</p>

      <div style={{ marginTop: '30px' }}>
        <button
          onClick={() => setShowBadTimer(!showBadTimer)}
          style={{
            padding: '15px 25px',
            fontSize: '18px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          {showBadTimer ? 'Unmount Bad Timer' : 'Mount Bad Timer (No Cleanup)'}
        </button>

        <button
          onClick={() => setShowGoodTimer(!showGoodTimer)}
          style={{
            padding: '15px 25px',
            fontSize: '18px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          {showGoodTimer ? 'Unmount Good Timer' : 'Mount Good Timer (With Cleanup)'}
        </button>
      </div>

      {showBadTimer && (
        <div style={{ marginTop: '30px', padding: '20px', border: '3px solid #dc3545' }}>
          <h3 style={{ color: '#dc3545' }}>Bad Timer - No Cleanup</h3>
          <BadTimer />
          <p style={{ color: '#666' }}>
            Watch the console - timer keeps running after unmount (memory leak)
          </p>
        </div>
      )}

      {showGoodTimer && (
        <div style={{ marginTop: '30px', padding: '20px', border: '3px solid #28a745' }}>
          <h3 style={{ color: '#28a745' }}>Good Timer - With Cleanup</h3>
          <GoodTimer />
          <p style={{ color: '#666' }}>
            Watch the console - timer stops after unmount (properly cleaned up)
          </p>
        </div>
      )}
    </>
  );
}

export default App;
