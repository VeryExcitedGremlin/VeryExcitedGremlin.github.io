```jsx
import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProductsPage from "./pages/ProductsPage";
import SnacksSection from "./components/SnacksSection";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/users/:userId" element={<UserProfilePage />} />

        {/* Parent route with nested child routes */}
        <Route path="/products" element={<ProductsPage />}>
          {/* Child route - renders inside the Outlet of ProductsPage */}
          <Route path="snacks" element={<SnacksSection />} />
        </Route>

        {/* Catch-all route - MUST be last! */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
```

Create src/pages/ProductsPage.jsx:

```jsx
import { Outlet, Link } from "react-router";
import Navigation from "../components/Navigation";

export default function ProductsPage() {
  return (
    <div>
      <Navigation />
      <h1>Our Products</h1>
      <div>
        <h3>Product Categories:</h3>
        <Link to="/products/snacks">Snacks</Link>
      </div>
      <hr />
      {/* This is where child routes will render */}
      <Outlet />
    </div>
  );
}
```

Create src/components/SnacksSection.jsx:

```jsx
export default function SnacksSection() {
  return (
    <div>
      <h2>Snacks Category</h2>
      <p>Browse our delicious selection of snacks!</p>
      <ul>
        <li>Chips - $2.99</li>
        <li>Cookies - $3.49</li>
        <li>Pretzels - $2.49</li>
        <li>Trail Mix - $4.99</li>
      </ul>
    </div>
  );
}
```
