// Login Page - Demonstrates login redirects

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin();
      navigate(from, { replace: true });
    }
  };

  return (
    <div className="page">
      <h1>Login</h1>
      {location.state?.from && (
        <p>You must log in to view that page.</p>
      )}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Enter any username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;
