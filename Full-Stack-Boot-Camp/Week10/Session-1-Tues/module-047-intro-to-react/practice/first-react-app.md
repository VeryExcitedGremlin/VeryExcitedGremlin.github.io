# Step by Step Practice for your first react app

## 1. Check if Node.js is Installed

First, verify Node.js is installed on your system:

```bash
node --version
npm --version
```

If you don't see version numbers, download and install Node.js from [nodejs.org](https://nodejs.org/).

  

Note: If you run into an error on Windows mentioning "Policy" you may need to open an administrator powershell and run the following:

  

```

Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

```

## 2. Set Up Vite with React Template

Create a new React project using Vite:

```bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
```

## 3. Check Your Current Directory

Always confirm where you are in the command line:

```bash
pwd  # On Mac/Linux
cd   # On Windows (shows current directory)
ls   # List files to see your project structure
```

You should see files like `package.json`, `vite.config.js`, and a `src` folder.

## 4. Create a Hello World Component with Export

Create a new file `src/HelloWorld.jsx`:

```jsx
// src/HelloWorld.jsx
function HelloWorld() {
  return <h1>Hello, World!</h1>;
}

export default HelloWorld;
```

## 5. Import the Component into App.jsx

Open `src/App.jsx` and replace its contents:

```jsx
// src/App.jsx
import HelloWorld from './HelloWorld';

function App() {
  return (
    <div>
      <HelloWorld />
    </div>
  );
}

export default App;
```

Test your setup by running:

```bash
npm run dev
```

## 6. Add a Prop to the Component

Update your `HelloWorld.jsx` to accept props:

```jsx
// src/HelloWorld.jsx
function HelloWorld(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default HelloWorld;
```

Update `App.jsx` to pass a prop:

```jsx
// src/App.jsx
import HelloWorld from './HelloWorld';

function App() {
  return (
    <div>
      <HelloWorld name="Alice" />
      <HelloWorld name="Bob" />
    </div>
  );
}

export default App;
```

## 7. Destructure the Prop

Refactor `HelloWorld.jsx` to use destructuring:

```jsx
// src/HelloWorld.jsx
function HelloWorld({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default HelloWorld;
```

This is cleaner than using `props.name`.

## 8. Add Styles - Inline and Stylesheet

### Inline Styles

Update `HelloWorld.jsx` with inline styles:

```jsx
// src/HelloWorld.jsx
function HelloWorld({ name }) {
  const inlineStyle = {
    color: 'blue',
    fontSize: '2rem',
    textAlign: 'center',
    margin: '20px 0'
  };

  return <h1 style={inlineStyle}>Hello, {name}!</h1>;
}

export default HelloWorld;
```

### Stylesheet Approach

Create a CSS file `src/HelloWorld.css`:

```css
/* src/HelloWorld.css */
.hello-world {
  color: #333;
  font-size: 2.5rem;
  text-align: center;
  margin: 20px 0;
  padding: 15px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

Update `HelloWorld.jsx` to use the CSS class:

```jsx
// src/HelloWorld.jsx
import './HelloWorld.css';

function HelloWorld({ name }) {
  return <h1 className="hello-world">Hello, {name}!</h1>;
}

export default HelloWorld;
```

## Final Files

### Final App.jsx

```jsx
// src/App.jsx
import HelloWorld from './HelloWorld';

function App() {
  return (
    <div>
      <HelloWorld name="Alice" />
      <HelloWorld name="Bob" />
      <HelloWorld name="Charlie" />
    </div>
  );
}

export default App;
```

### Final HelloWorld.jsx

```jsx
// src/HelloWorld.jsx
import './HelloWorld.css';

function HelloWorld({ name }) {
  return <h1 className="hello-world">Hello, {name}!</h1>;
}

export default HelloWorld;
```

### Final HelloWorld.css

```css
/* src/HelloWorld.css */
.hello-world {
  color: #333;
  font-size: 2.5rem;
  text-align: center;
  margin: 20px 0;
  padding: 15px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

## Run Your Application (if you haven't previously)

Start the development server:

```bash
npm run dev
```

Visit the localhost URL shown in your terminal (usually http://localhost:5173) to see your components in action!
