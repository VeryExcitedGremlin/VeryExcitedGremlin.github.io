import { useState } from 'react';

function Header({ title }) {
  return (
    <header style={{
      backgroundColor: '#282c34',
      padding: '20px',
      color: 'white',
      textAlign: 'center'
    }}>
      <h1>{title}</h1>
    </header>
  );
}

function UserCard({ user, onSelect }) {
  return (
    <div
      onClick={() => onSelect(user)}
      style={{
        border: '1px solid #ddd',
        padding: '15px',
        margin: '10px',
        borderRadius: '8px',
        cursor: 'pointer',
        backgroundColor: '#f9f9f9'
      }}
    >
      <h4>{user.name}</h4>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

function UserList({ users, onUserSelect }) {
  return (
    <div style={{ padding: '20px' }}>
      <h3>User List ({users.length} users)</h3>
      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          onSelect={onUserSelect}
        />
      ))}
    </div>
  );
}

function UserDetails({ selectedUser }) {
  if (!selectedUser) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
        Select a user to see details
      </div>
    );
  }

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#e7f3ff',
      margin: '20px',
      borderRadius: '8px'
    }}>
      <h3>Selected User Details</h3>
      <p><strong>Name:</strong> {selectedUser.name}</p>
      <p><strong>Email:</strong> {selectedUser.email}</p>
      <p><strong>Role:</strong> {selectedUser.role}</p>
      <p><strong>Department:</strong> {selectedUser.department}</p>
    </div>
  );
}

function Section2ComponentTree() {
  const [users] = useState([
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      role: 'Admin',
      department: 'Engineering'
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob@example.com',
      role: 'Developer',
      department: 'Engineering'
    },
    {
      id: 3,
      name: 'Carol Davis',
      email: 'carol@example.com',
      role: 'Designer',
      department: 'Design'
    }
  ]);

  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div style={{ minHeight: '100vh' }}>
      <h2 style={{ padding: '20px', textAlign: 'center' }}>2. Component Tree Navigation</h2>

      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '15px',
        margin: '20px',
        borderRadius: '8px'
      }}>
        <h4>🔍 Component Tree Structure:</h4>
        <pre style={{ fontSize: '14px' }}>
{`App
├── Header
├── UserList
│   └── UserCard (x3)
└── UserDetails`}
        </pre>
      </div>

      <Header title="User Management System" />

      <div style={{ display: 'flex', minHeight: '400px' }}>
        <div style={{ flex: 1 }}>
          <UserList users={users} onUserSelect={setSelectedUser} />
        </div>
        <div style={{ flex: 1 }}>
          <UserDetails selectedUser={selectedUser} />
        </div>
      </div>

      <div style={{
        backgroundColor: '#e7f3ff',
        padding: '15px',
        margin: '20px',
        borderRadius: '8px'
      }}>
        <h4>🎯 DevTools Practice:</h4>
        <p>1. Open ⚛️ Components tab in DevTools</p>
        <p>2. Expand the component tree - see how it matches the visual hierarchy?</p>
        <p>3. Click on different components in the tree</p>
        <p>4. Select a user card and watch selectedUser state change in Section2ComponentTree</p>
        <p>5. Use the search box in DevTools to find "UserCard" quickly</p>
        <p>6. Notice how props flow down from parent to child components</p>
      </div>
    </div>
  );
}

export default Section2ComponentTree;