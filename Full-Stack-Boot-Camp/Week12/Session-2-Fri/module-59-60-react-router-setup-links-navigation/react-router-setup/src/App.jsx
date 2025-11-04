import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import UserProfilePage from "./pages/UserProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Routes>
        {/* for the root patch  */}
        {/* prefix to path will typically be http://localhost:5173 or something similar or the deployed domain name */}
        {/* element is the page we want to display when our address bar is pointing to that path */}
        <Route path="/" element={<HomePage />} />
        {/* 5 min to add the contact route */}
        <Route path="/contact" element={<ContactPage />} />
        {/* :userId comes from the route in the address bar */}
        {/* http://localhost:5173/user-profile/1 */}
        {/* Q: What is userId for the above URL? */}
        {/* A: 1 */}
        <Route path="/user-profile/:userId" element={<UserProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Navigation />
    </>
  );
}

export default App;
