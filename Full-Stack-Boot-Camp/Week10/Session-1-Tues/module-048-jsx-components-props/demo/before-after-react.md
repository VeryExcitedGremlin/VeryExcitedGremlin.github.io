## Before React (Vanilla JavaScript - The Hard Way):

```html
<!-- normal template -->

<h2 id="counter-display">0</h2>
<p id="status"></p>
<button id="increment-btn">Increment</button>
<!-- normal template -->
```

```javascript
const button = document.querySelector("#increment-btn");
const display = document.querySelector("#counter-display");
let count = 0;

button.addEventListener("click", () => {
  count++;
  display.textContent = count;

  // Update multiple places manually
  document.getElementById("status").textContent = count > 10 ? "High!" : "Low";

  if (count > 5) {
    display.style.color = "red";
  }
});
```

### After React (The Beautiful Way):

```javascript
// React - Clean, readable, and powerful!
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2 style={{ color: count > 5 ? "red" : "black" }}>{count}</h2>
      <p>{count > 10 ? "High!" : "Low"}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

## Component Based Architecture

```jsx
// Create once, use everywhere!
function ProfileCard({ name, avatar, role }) {
  return (
    <div className="profile-card">
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

// Use it multiple times
function TeamPage() {
  return (
    <div>
      <ProfileCard name="Sarah" avatar="/sarah.jpg" role="Designer" />
      <ProfileCard name="Mike" avatar="/mike.jpg" role="Developer" />
      <ProfileCard name="Lisa" avatar="/lisa.jpg" role="Manager" />
    </div>
  );
}
```

## JSX

```jsx
// This looks like HTML but it's actually JavaScript!
function App() {
  const title = "My Awesome App";
  const isLoggedIn = true;

  return (
    <div className="app">
      <h1>{title}</h1>
      {isLoggedIn && <p>Welcome back!</p>}
      <button onClick={() => alert("Clicked!")}>Click me!</button>
    </div>
  );
}
```


## Virtual DOM -> Mental model rather than how React Fiber

Instead of updating the entire page, react figures out which parts need
 to be updated, and just changes those

```jsx
// React automatically optimizes these updates
function TodoList({ todos }) {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    );
}
// When todos change, React only updates the specific list items!
```


## SPA - Single page Application

whenever changes happen to the page, its only happening on index.html, 
we don't load other pages, JS fakes it out for us.