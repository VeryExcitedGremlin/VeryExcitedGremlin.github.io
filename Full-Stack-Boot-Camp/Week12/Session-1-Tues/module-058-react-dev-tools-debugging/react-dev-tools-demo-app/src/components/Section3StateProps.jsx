import { useState, useEffect } from 'react';

// Component to demonstrate state debugging
function Counter({ initialCount = 0, step = 1 }) {
  const [count, setCount] = useState(initialCount);
  const [history, setHistory] = useState([initialCount]);

  console.log('Counter rendering:', { count, step, historyLength: history.length });

  const increment = () => {
    const newCount = count + step;
    setCount(newCount);
    setHistory([...history, newCount]);
  };

  const decrement = () => {
    const newCount = count - step;
    setCount(newCount);
    setHistory([...history, newCount]);
  };

  return (
    <div style={{
      border: '3px solid #2563eb',
      padding: '20px',
      margin: '10px 0',
      backgroundColor: '#ffffff'
    }}>
      <h4 style={{ color: '#1e40af', marginTop: 0 }}>Counter Component</h4>
      <p><strong>Count:</strong> {count}</p>
      <p><strong>Step:</strong> {step}</p>
      <p><strong>History Length:</strong> {history.length}</p>
      <div style={{ marginTop: '16px' }}>
        <button onClick={decrement} style={{
          marginRight: '10px',
          padding: '8px 16px',
          backgroundColor: '#dc2626',
          color: '#ffffff',
          border: 'none',
          cursor: 'pointer'
        }}>
          - {step}
        </button>
        <button onClick={increment} style={{
          padding: '8px 16px',
          backgroundColor: '#16a34a',
          color: '#ffffff',
          border: 'none',
          cursor: 'pointer'
        }}>
          + {step}
        </button>
      </div>
      <div style={{ marginTop: '16px', fontSize: '14px', color: '#64748b', backgroundColor: '#f1f5f9', padding: '12px' }}>
        <strong>DevTools Practice:</strong> Watch count and history state update in real-time
      </div>
    </div>
  );
}

// Component demonstrating prop drilling
function ParentComponent() {
  const [userData, setUserData] = useState({
    name: 'Alice',
    age: 25,
    role: 'developer'
  });
  const [theme, setTheme] = useState('light');

  return (
    <div style={{
      border: '3px solid #16a34a',
      padding: '20px',
      margin: '10px 0',
      backgroundColor: '#ffffff'
    }}>
      <h4 style={{ color: '#15803d', marginTop: 0 }}>Parent Component</h4>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Theme:</strong> {theme}</p>

      <button
        onClick={() => setUserData({ ...userData, age: userData.age + 1 })}
        style={{
          marginRight: '10px',
          padding: '8px 16px',
          backgroundColor: '#2563eb',
          color: '#ffffff',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Increase Age
      </button>

      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        style={{
          padding: '8px 16px',
          backgroundColor: '#7c3aed',
          color: '#ffffff',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Toggle Theme
      </button>

      <ChildComponent user={userData} theme={theme} />
    </div>
  );
}

function ChildComponent({ user, theme }) {
  return (
    <div style={{
      marginTop: '16px',
      padding: '16px',
      backgroundColor: theme === 'light' ? '#f1f5f9' : '#1e293b',
      color: theme === 'light' ? '#0f172a' : '#f1f5f9',
      border: '2px solid' + (theme === 'light' ? '#cbd5e1' : '#475569')
    }}>
      <h5 style={{ marginTop: 0 }}>Child Component</h5>
      <p>User: {user.name}, Age: {user.age}, Role: {user.role}</p>
      <p>Theme: {theme}</p>
    </div>
  );
}

function Section3StateProps() {
  const [counterStep, setCounterStep] = useState(1);

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: '#0f172a' }}>3. Debugging State & Props</h2>

      <div style={{
        backgroundColor: '#fef3c7',
        padding: '20px',
        marginBottom: '24px',
        border: '2px solid #f59e0b'
      }}>
        <h4 style={{ marginTop: 0, color: '#92400e' }}>Step-by-Step DevTools Guide:</h4>
        <p><strong>1. Open React DevTools:</strong> Press F12, Click Components tab</p>
        <p><strong>2. Select Counter:</strong> Click "Counter" in the component tree</p>
        <p><strong>3. Watch State:</strong> Click increment button, see 'count' update in Hooks section</p>
        <p><strong>4. Edit Props:</strong> Find 'step' in Props, click value and change it (try 5)</p>
        <p><strong>5. Track Data Flow:</strong> Click "Increase Age", watch userData flow to Child</p>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ marginRight: '10px', fontWeight: 'bold', color: '#0f172a' }}>
          Counter Step:
        </label>
        <input
          type="number"
          value={counterStep}
          onChange={(e) => setCounterStep(Number(e.target.value) || 1)}
          style={{
            padding: '8px',
            width: '80px',
            border: '2px solid #cbd5e1',
            fontSize: '16px'
          }}
        />
      </div>

      <Counter initialCount={0} step={counterStep} />
      <ParentComponent />

      <div style={{
        backgroundColor: '#dcfce7',
        padding: '20px',
        marginTop: '24px',
        border: '2px solid #16a34a'
      }}>
        <h4 style={{ marginTop: 0, color: '#14532d' }}>Success Criteria:</h4>
        <p><strong>You have completed this section when you can:</strong></p>
        <p>- Find components and see their props/state</p>
        <p>- Edit props directly in DevTools</p>
        <p>- Understand why components re-render</p>
        <p>- Trace data flow from parent to child</p>
      </div>
    </div>
  );
}

export default Section3StateProps;
