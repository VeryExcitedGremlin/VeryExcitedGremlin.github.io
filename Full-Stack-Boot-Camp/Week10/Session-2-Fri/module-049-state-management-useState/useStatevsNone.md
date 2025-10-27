## No useState

```jsx
// Static, boring, lifeless component
function StaticCounter() {
  const count = 0; // This never changes!
  
  return (
    <div>
      <h2>Count: {count}</h2>
      <button>+</button> {/* Clicking does nothing! */}
      <button>-</button>
    </div>
  );
}
```

```jsx
import { useState } from 'react';

// Dynamic, interactive, amazing component!
function InteractiveCounter() {
  const [count, setCount] = useState(0); // initializing count to 0
  //setCount is our function that updates count
  // we never update count ourselves
  // const - makes sure that we don't accidently update count
  
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
```


```jsx
const value = useState(0);

// value is an array of length 2

// value[0] is the variable that holds our state

// value[1] is the function that lets us update value[0]

```


