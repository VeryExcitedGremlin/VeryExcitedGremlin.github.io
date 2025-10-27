```jsx
function SignupForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Stop the page from refreshing!
    
    // Now you can do whatever you want with the data
    console.log('Form submitted:', { username, password });
    
    // Clear the form
    setUsername('');
    setPassword('');
    
    alert('Account created successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      
      <input 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      
      <button type="submit">Create Account</button>
    </form>
  );
}
```