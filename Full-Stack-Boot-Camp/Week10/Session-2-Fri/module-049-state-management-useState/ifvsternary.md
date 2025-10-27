```jsx
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [count, setCount] = useState(0);

  // If statement function
  const getMessage = () => {
    if (isLoggedIn) {
      return "Welcome back!";
    }
    return "Please log in";
  };

  // Optionally we can use ternaries to do similar things
  //{isLoggedIn ? 'Log Out' : 'Log In'}
  return (
    <div>
      <h1>If Statement Demo</h1>
      <p>{getMessage()}</p>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log Out" : "Log In"}
      </button>
      <p>Count: {count}</p>
      <p>{count > 5 ? "High count!" : "Low count"}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
