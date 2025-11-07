// Dashboard Page - A protected route demonstrating authentication

function Dashboard() {
  return (
    <div className="page">
      <h1>Dashboard</h1>
      <p>Welcome! This is a protected page.</p>
      <p>You can only see this because you're logged in.</p>

      <div className="dashboard-card">
        <h2>Quick Stats</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-value">15</div>
            <div className="stat-label">Orders</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">$1,245</div>
            <div className="stat-label">Spent</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">8</div>
            <div className="stat-label">Items</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
