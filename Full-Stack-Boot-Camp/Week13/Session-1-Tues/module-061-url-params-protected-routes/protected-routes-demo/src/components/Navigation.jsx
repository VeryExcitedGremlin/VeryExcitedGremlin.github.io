// Navigation Component
// Main navigation bar with links and login/logout functionality

import { NavLink } from 'react-router-dom';

function Navigation({ isLoggedIn, onLogout }) {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <NavLink to="/">React Router Demo</NavLink>
        </div>

        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>

          {/* Show dashboard link only when logged in */}
          {isLoggedIn && (
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          )}
        </ul>

        <div className="nav-auth">
          {isLoggedIn ? (
            <button onClick={onLogout} className="btn-logout">
              Logout
            </button>
          ) : (
            <NavLink to="/login" className="btn-login">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
