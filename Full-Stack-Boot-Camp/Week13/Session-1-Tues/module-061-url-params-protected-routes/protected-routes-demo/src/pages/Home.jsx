// Home Page
// Welcome page explaining the demo

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page home-page">
      <h1>URL Parameters & Protected Routes Demo</h1>

      <p className="subtitle">
        This simple demo shows three essential React Router concepts.
      </p>

      <div className="feature-grid">
        <div className="feature-card">
          <h2>1. Query Parameters</h2>
          <p>
            Search and filter products. Watch the URL update with your filters.
            Uses <code>useSearchParams()</code>.
          </p>
          <Link to="/products" className="btn">
            Browse Products
          </Link>
        </div>

        <div className="feature-card">
          <h2>2. Path Parameters</h2>
          <p>
            Click any product to see its detail page. The product ID becomes
            part of the URL. Uses <code>useParams()</code>.
          </p>
          <Link to="/products/1" className="btn">
            View Example
          </Link>
        </div>

        <div className="feature-card">
          <h2>3. Protected Routes</h2>
          <p>
            Try accessing the dashboard without logging in. You'll be redirected
            to login, then back after success.
          </p>
          <Link to="/dashboard" className="btn">
            Try Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
