import { useState, useEffect, useCallback } from 'react';

// Component with common debugging scenarios
function BuggyCounter() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  // BUG: Missing dependency in useEffect
  useEffect(() => {
    console.log('Counter effect running...');
    const timer = setInterval(() => {
      setCount(count + 1); // This captures stale closure!
    }, 1000);

    return () => clearInterval(timer);
  }, []); // Missing 'count' dependency!

  return (
    <div style={{
      border: '3px solid #dc2626',
      padding: '16px',
      margin: '10px',
      backgroundColor: '#ffffff'
    }}>
      <h4 style={{ color: '#dc2626', marginTop: '0' }}>Buggy Counter</h4>
      <p style={{ color: '#0f172a' }}>Count: {count}</p>
      <p style={{ color: '#0f172a' }}>Multiplier: {multiplier}</p>
      <p style={{ color: '#0f172a' }}>Result: {count * multiplier}</p>
      <button
        onClick={() => setMultiplier(multiplier + 1)}
        style={{
          padding: '8px 16px',
          backgroundColor: '#dc2626',
          color: '#ffffff',
          border: '2px solid #dc2626',
          cursor: 'pointer',
          fontWeight: '500'
        }}
      >
        Increase Multiplier
      </button>
      <p style={{ fontSize: '14px', color: '#64748b', marginTop: '8px', marginBottom: '0' }}>
        Bug: Timer gets stuck at 1! Check DevTools to debug.
      </p>
    </div>
  );
}

function FixedCounter() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  // FIXED: Proper dependency array OR functional update
  useEffect(() => {
    console.log('Fixed counter effect running...');
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1); // Functional update!
    }, 1000);

    return () => clearInterval(timer);
  }, []); // Now safe because we use functional update

  return (
    <div style={{
      border: '3px solid #16a34a',
      padding: '16px',
      margin: '10px',
      backgroundColor: '#ffffff'
    }}>
      <h4 style={{ color: '#16a34a', marginTop: '0' }}>Fixed Counter</h4>
      <p style={{ color: '#0f172a' }}>Count: {count}</p>
      <p style={{ color: '#0f172a' }}>Multiplier: {multiplier}</p>
      <p style={{ color: '#0f172a' }}>Result: {count * multiplier}</p>
      <button
        onClick={() => setMultiplier(multiplier + 1)}
        style={{
          padding: '8px 16px',
          backgroundColor: '#16a34a',
          color: '#ffffff',
          border: '2px solid #16a34a',
          cursor: 'pointer',
          fontWeight: '500'
        }}
      >
        Increase Multiplier
      </button>
      <p style={{ fontSize: '14px', color: '#64748b', marginTop: '8px', marginBottom: '0' }}>
        Fixed: Uses functional update to avoid stale closure
      </p>
    </div>
  );
}

// Component to demonstrate debugging props and state
function UserForm({ onSubmit, initialUser = {} }) {
  const [user, setUser] = useState({
    name: initialUser.name || '',
    email: initialUser.email || '',
    role: initialUser.role || 'user'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = useCallback(() => {
    const newErrors = {};
    if (!user.name.trim()) newErrors.name = 'Name is required';
    if (!user.email.trim()) newErrors.email = 'Email is required';
    if (!user.email.includes('@')) newErrors.email = 'Invalid email format';
    return newErrors;
  }, [user.name, user.email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await onSubmit(user);
        setUser({ name: '', email: '', role: 'user' });
      } catch (error) {
        console.error('Submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div style={{
      border: '3px solid #2563eb',
      padding: '16px',
      margin: '10px',
      backgroundColor: '#ffffff'
    }}>
      <h4 style={{ color: '#2563eb', marginTop: '0' }}>User Form (Debug Me!)</h4>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ color: '#0f172a' }}>Name:</label>
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            style={{
              marginLeft: '10px',
              padding: '8px',
              border: errors.name ? '2px solid #dc2626' : '2px solid #cbd5e1',
              color: '#0f172a'
            }}
          />
          {errors.name && <span style={{ color: '#dc2626', fontSize: '14px', display: 'block', marginTop: '4px' }}>{errors.name}</span>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label style={{ color: '#0f172a' }}>Email:</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            style={{
              marginLeft: '10px',
              padding: '8px',
              border: errors.email ? '2px solid #dc2626' : '2px solid #cbd5e1',
              color: '#0f172a'
            }}
          />
          {errors.email && <span style={{ color: '#dc2626', fontSize: '14px', display: 'block', marginTop: '4px' }}>{errors.email}</span>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label style={{ color: '#0f172a' }}>Role:</label>
          <select
            value={user.role}
            onChange={(e) => setUser({ ...user, role: e.target.value })}
            style={{
              marginLeft: '10px',
              padding: '8px',
              border: '2px solid #cbd5e1',
              color: '#0f172a',
              backgroundColor: '#ffffff'
            }}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="moderator">Moderator</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            padding: '10px 20px',
            backgroundColor: isSubmitting ? '#cbd5e1' : '#2563eb',
            color: '#ffffff',
            border: '2px solid ' + (isSubmitting ? '#cbd5e1' : '#2563eb'),
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            fontWeight: '500'
          }}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

function Section5Debugging() {
  const [submittedUsers, setSubmittedUsers] = useState([]);
  const [debugInfo, setDebugInfo] = useState({
    renderCount: 0,
    lastAction: 'Initial load'
  });

  // Update debug info on every render
  useEffect(() => {
    setDebugInfo(prev => ({
      ...prev,
      renderCount: prev.renderCount + 1
    }));
  });

  const handleUserSubmit = async (user) => {
    setDebugInfo(prev => ({ ...prev, lastAction: `Submitted user: ${user.name}` }));

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmittedUsers(prev => [...prev, { ...user, id: Date.now() }]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: '#0f172a' }}>5. Advanced Debugging Techniques</h2>

      <div style={{
        backgroundColor: '#fef3c7',
        padding: '16px',
        border: '2px solid #f59e0b',
        marginBottom: '20px'
      }}>
        <h4 style={{ color: '#92400e', marginTop: '0' }}>Debugging Tools & Techniques:</h4>
        <ul style={{ color: '#0f172a', lineHeight: '1.8' }}>
          <li><strong>Components Tab:</strong> Inspect props, state, and hooks in real-time</li>
          <li><strong>Console Logs:</strong> Track component lifecycle and state changes</li>
          <li><strong>Breakpoints:</strong> Set breakpoints in DevTools Sources tab</li>
          <li><strong>React DevTools Profiler:</strong> Find performance bottlenecks</li>
          <li><strong>Component Stack Traces:</strong> See where errors originated</li>
        </ul>
      </div>

      <div style={{
        backgroundColor: '#dbeafe',
        padding: '16px',
        border: '2px solid #2563eb',
        marginBottom: '20px'
      }}>
        <h4 style={{ color: '#1e40af', marginTop: '0' }}>Debug Information:</h4>
        <p style={{ color: '#0f172a' }}><strong>Component Renders:</strong> {debugInfo.renderCount}</p>
        <p style={{ color: '#0f172a' }}><strong>Last Action:</strong> {debugInfo.lastAction}</p>
        <p style={{ color: '#0f172a', marginBottom: '0' }}><strong>Submitted Users:</strong> {submittedUsers.length}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <BuggyCounter />
        <FixedCounter />
      </div>

      <UserForm onSubmit={handleUserSubmit} />

      {submittedUsers.length > 0 && (
        <div style={{
          backgroundColor: '#dcfce7',
          padding: '16px',
          border: '2px solid #16a34a',
          marginTop: '20px'
        }}>
          <h4 style={{ color: '#15803d', marginTop: '0' }}>Submitted Users:</h4>
          {submittedUsers.map(user => (
            <div key={user.id} style={{
              padding: '8px',
              borderBottom: '2px solid #cbd5e1',
              color: '#0f172a'
            }}>
              {user.name} ({user.email}) - {user.role}
            </div>
          ))}
        </div>
      )}

      <div style={{
        backgroundColor: '#dbeafe',
        padding: '16px',
        border: '2px solid #2563eb',
        marginTop: '20px'
      }}>
        <h4 style={{ color: '#1e40af', marginTop: '0' }}>Debugging Exercise:</h4>
        <p style={{ color: '#0f172a' }}><strong>Bug Hunt:</strong> Find and understand the bug in BuggyCounter</p>
        <p style={{ color: '#0f172a' }}><strong>State Tracking:</strong> Watch how UserForm state changes as you type</p>
        <p style={{ color: '#0f172a' }}><strong>Props Flow:</strong> See how onSubmit prop flows from Section5Debugging to UserForm</p>
        <p style={{ color: '#0f172a' }}><strong>Performance:</strong> Use Profiler to see which components re-render when</p>
        <p style={{ color: '#0f172a' }}><strong>Console Debugging:</strong> Check console for lifecycle logs and errors</p>

        <h5 style={{ color: '#2563eb', marginTop: '16px', marginBottom: '8px' }}>DevTools Checklist:</h5>
        <div style={{ color: '#0f172a' }}>
          <div style={{ marginBottom: '8px' }}>
            <input type="checkbox" id="check1" style={{ marginRight: '8px' }} />
            <label htmlFor="check1">Find BuggyCounter in Components tab and inspect its state</label>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <input type="checkbox" id="check2" style={{ marginRight: '8px' }} />
            <label htmlFor="check2">Watch the count state - why does it get stuck?</label>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <input type="checkbox" id="check3" style={{ marginRight: '8px' }} />
            <label htmlFor="check3">Compare useEffect dependencies between buggy and fixed versions</label>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <input type="checkbox" id="check4" style={{ marginRight: '8px' }} />
            <label htmlFor="check4">Set a breakpoint in handleSubmit function</label>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <input type="checkbox" id="check5" style={{ marginRight: '8px' }} />
            <label htmlFor="check5">Use Profiler to record form submission performance</label>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <input type="checkbox" id="check6" style={{ marginRight: '8px' }} />
            <label htmlFor="check6">Edit props/state directly in DevTools to test different scenarios</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5Debugging;