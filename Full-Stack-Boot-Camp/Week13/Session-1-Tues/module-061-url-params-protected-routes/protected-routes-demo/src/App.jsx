// Main App Component
// Sets up all routes including protected routes

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navigation from "./components/Navigation.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

// Pages
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";

// Styles
import "./App.css";

function App() {
  // Track authentication state
  // In a real app, this would come from a context or state management library
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="app">
      {/* Navigation appears on all pages */}
      <Navigation isLoggedIn={isLoggedIn} onLogout={handleLogout} />

      {/* Main content area */}
      <main className="main-content">
        <Routes>
          {/* Public routes - anyone can access */}
          <Route path="/" element={<Home />} />

          {/* Products routes demonstrating URL parameters */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />

          {/* Login route */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />

          {/* Protected route - requires authentication */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* 404 - Catch all unmatched routes */}
          <Route
            path="*"
            element={
              <div className="page error-page">
                <h1>404: Page Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
              </div>
            }
          />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Module 061 Demo: URL Parameters & Protected Routes</p>
      </footer>
    </div>
  );
}

export default App;
