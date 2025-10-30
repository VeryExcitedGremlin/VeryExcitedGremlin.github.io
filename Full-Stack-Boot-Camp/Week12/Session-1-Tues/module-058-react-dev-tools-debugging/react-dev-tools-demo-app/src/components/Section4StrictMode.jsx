import { useState, useEffect, useRef } from 'react';

// Component that demonstrates StrictMode double execution issues
function ProblematicComponent() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);
  renderCount.current += 1;

  console.log(`🔴 ProblematicComponent render #${renderCount.current}`);

  useEffect(() => {
    console.log('🔴 ProblematicComponent useEffect running');
    // This will run twice in StrictMode!

    // Problematic: side effect without cleanup
    const timer = setInterval(() => {
      console.log('Timer tick - this could cause memory leaks!');
    }, 2000);

    // Missing cleanup! This is what StrictMode helps catch
    // return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      border: '2px solid #ff6b6b',
      padding: '15px',
      margin: '10px',
      borderRadius: '8px'
    }}>
      <h4 style={{ color: '#ff6b6b' }}>❌ Problematic Component</h4>
      <p>Render count: {renderCount.current}</p>
      <p>State count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: '8px 16px',
          backgroundColor: '#ff6b6b',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Increment
      </button>
      <p style={{ fontSize: '12px', color: '#666' }}>
        Check console - useEffect runs twice in StrictMode!
      </p>
    </div>
  );
}

// Component that handles StrictMode properly
function RobustComponent() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);
  renderCount.current += 1;

  console.log(`✅ RobustComponent render #${renderCount.current}`);

  useEffect(() => {
    console.log('✅ RobustComponent useEffect running');

    // Proper side effect with cleanup
    const timer = setInterval(() => {
      console.log('✅ Robust timer tick');
    }, 2000);

    // Proper cleanup prevents memory leaks
    return () => {
      console.log('✅ Cleaning up timer');
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={{
      border: '2px solid #51cf66',
      padding: '15px',
      margin: '10px',
      borderRadius: '8px'
    }}>
      <h4 style={{ color: '#51cf66' }}>✅ Robust Component</h4>
      <p>Render count: {renderCount.current}</p>
      <p>State count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: '8px 16px',
          backgroundColor: '#51cf66',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Increment
      </button>
      <p style={{ fontSize: '12px', color: '#666' }}>
        Proper cleanup - no memory leaks!
      </p>
    </div>
  );
}

// Custom hook to demonstrate double execution
function useRenderCounter(componentName) {
  const renderCount = useRef(0);
  renderCount.current += 1;

  useEffect(() => {
    console.log(`🔍 ${componentName} useEffect #${renderCount.current}`);
  });

  return renderCount.current;
}

function StrictModeTester() {
  const renderCount = useRenderCounter('StrictModeTester');
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('🔍 StrictModeTester: Setting up...');

    // Simulate API call or subscription
    const fakeSubscription = {
      subscribe: () => {
        console.log('🔍 Subscribing to service...');
        return () => console.log('🔍 Unsubscribing from service...');
      }
    };

    const unsubscribe = fakeSubscription.subscribe();

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div style={{
      border: '2px solid #339af0',
      padding: '15px',
      margin: '10px',
      borderRadius: '8px'
    }}>
      <h4 style={{ color: '#339af0' }}>🔍 StrictMode Tester</h4>
      <p>This component render count: {renderCount}</p>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type to see re-renders..."
        style={{
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          width: '200px'
        }}
      />
      <p>Message: {message}</p>
    </div>
  );
}

function Section4StrictMode() {
  const [showComponents, setShowComponents] = useState(true);

  return (
    <div style={{ padding: '20px' }}>
      <h2>4. React StrictMode Testing</h2>

      <div style={{
        backgroundColor: '#fff3cd',
        padding: '15px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h4>⚠️ StrictMode Behavior:</h4>
        <p>In development, React StrictMode intentionally double-executes:</p>
        <ul>
          <li>Component constructors and render methods</li>
          <li>State updater functions</li>
          <li>useEffect, useMemo, and useState functions</li>
        </ul>
        <p><strong>Why?</strong> To help detect side effects and ensure your components are pure!</p>
      </div>

      <div style={{
        backgroundColor: '#e7f3ff',
        padding: '15px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h4>🔧 Current StrictMode Status:</h4>
        <p>This app should be wrapped in &lt;StrictMode&gt; - check main.jsx</p>
        <p>Open your browser console to see the double execution logs!</p>
      </div>

      <button
        onClick={() => setShowComponents(!showComponents)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        {showComponents ? 'Hide' : 'Show'} Components (Toggle Mount/Unmount)
      </button>

      {showComponents && (
        <>
          <ProblematicComponent />
          <RobustComponent />
          <StrictModeTester />
        </>
      )}

      <div style={{
        backgroundColor: '#e7f3ff',
        padding: '15px',
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <h4>🎯 StrictMode Exercise:</h4>
        <p><strong>Step 1:</strong> Open browser console and watch the logs</p>
        <p><strong>Step 2:</strong> Toggle components on/off to see mount/unmount behavior</p>
        <p><strong>Step 3:</strong> Notice how effects run twice in development</p>
        <p><strong>Step 4:</strong> Compare problematic vs robust component behavior</p>
        <p><strong>Step 5:</strong> In DevTools Components tab, look for double-execution patterns</p>
        <p><strong>Key Learning:</strong> StrictMode helps you write better, more predictable React code!</p>
      </div>
    </div>
  );
}

export default Section4StrictMode;