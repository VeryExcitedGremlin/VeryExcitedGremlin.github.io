import { Link } from "react-router";

export default function Navigation() {
  return (
    <nav>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/user-profile">User Profile</Link>
      </li>
      <li>
        <Link to="/user-profile/123">User Profile (ID: 123)</Link>
      </li>
    </nav>
  );
}
