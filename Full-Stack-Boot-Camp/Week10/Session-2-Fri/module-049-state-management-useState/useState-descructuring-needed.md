```jsx
import { useState } from 'react';

function MyComponent() {
  // [currentValue, setterFunction] = useState(initialValue)
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [items, setItems] = useState([]);
  const [user, setUser] = useState({ name: '', email: '' });
  
  return (
    <div>
      <h3>Hello, {name}!</h3>
      <p>Age: {age}</p>
      <p>Status: {isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
    </div>
  );
}
```

## **Remember**: Always destructure useState into `[value, setValue]` format!