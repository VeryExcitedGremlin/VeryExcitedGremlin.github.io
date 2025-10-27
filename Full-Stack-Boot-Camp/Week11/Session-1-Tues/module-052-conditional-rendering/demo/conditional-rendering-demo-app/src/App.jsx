import "./App.css";
import UserProfile from "./components/UserProfile";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const userOne = {
    name: "Sarah",
    email: "sarah@gmail.com",
  };
  return (
    <>
      <WelcomeMessage />
      {/* Check out other components by importing here */}
      <UserProfile user={userOne} />
    </>
  );
}

export default App;
