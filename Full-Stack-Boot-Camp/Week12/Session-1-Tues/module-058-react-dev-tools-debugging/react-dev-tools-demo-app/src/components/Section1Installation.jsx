import { useState } from 'react';

function UserProfile({ user }) {
  const [loading, setLoading] = useState(false);

  return (
    <div style={{
      padding: '20px',
      border: '3px solid #2563eb',
      margin: '10px 0',
      backgroundColor: '#ffffff'
    }}>
      <h3 style={{ color: '#1e40af', marginTop: 0 }}>User Profile Component</h3>
      <p><strong>Name:</strong> {user?.name}</p>
      <p><strong>ID:</strong> {user?.id}</p>
      <p><strong>Loading:</strong> {loading ? 'Yes' : 'No'}</p>
      <button
        onClick={() => setLoading(!loading)}
        style={{
          padding: '8px 16px',
          backgroundColor: '#7c3aed',
          color: '#ffffff',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Toggle Loading State
      </button>
      <div style={{
        marginTop: '16px',
        fontSize: '14px',
        color: '#64748b',
        backgroundColor: '#f1f5f9',
        padding: '12px'
      }}>
        <strong>DevTools Practice:</strong>
        <br />- Select this component in the Components tab
        <br />- Watch the 'loading' state change when you click the button
        <br />- Inspect the 'user' prop values
      </div>
    </div>
  );
}

function Section1Installation() {
  const [user, setUser] = useState({ id: 1, name: 'John Doe' });

  const updateUser = () => {
    setUser({
      id: user.id + 1,
      name: `User ${user.id + 1}`
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: '#0f172a' }}>1. Installing and Accessing DevTools</h2>

      <div style={{
        backgroundColor: '#fef3c7',
        padding: '20px',
        marginBottom: '24px',
        border: '2px solid #f59e0b'
      }}>
        <h4 style={{ marginTop: 0, color: '#92400e' }}>Installation Checklist:</h4>
        <p>- Install "React Developer Tools" browser extension</p>
        <p>- Open browser DevTools (F12)</p>
        <p>- Look for Components and Profiler tabs</p>
        <p>- Make sure you're in development mode</p>
      </div>

      <button
        onClick={updateUser}
        style={{
          padding: '10px 20px',
          backgroundColor: '#2563eb',
          color: '#ffffff',
          border: 'none',
          cursor: 'pointer',
          marginBottom: '20px',
          fontSize: '16px'
        }}
      >
        Update User (ID: {user.id})
      </button>

      <UserProfile user={user} />

      <div style={{
        backgroundColor: '#dbeafe',
        padding: '20px',
        marginTop: '24px',
        border: '2px solid #2563eb'
      }}>
        <h4 style={{ marginTop: 0, color: '#1e40af' }}>Practice Exercise:</h4>
        <p>1. Open React DevTools (Components tab)</p>
        <p>2. Find the "UserProfile" component in the tree</p>
        <p>3. Click "Update User" and watch props change in real-time</p>
        <p>4. Toggle the loading state and see it update in DevTools</p>
        <p>5. Try editing props directly in DevTools</p>
      </div>
    </div>
  );
}

export default Section1Installation;
