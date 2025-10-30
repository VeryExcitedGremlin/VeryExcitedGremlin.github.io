import { useState } from 'react'
import HelloWorldInline from "./HelloWorld";
import {HelloWorld} from './HelloWorld';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <HelloWorldInline />
        <HelloWorldInline name="Alice" />
        <HelloWorldInline name="Bob" />
        <HelloWorldInline name="Jane" />
      </div>
      <div>
        <HelloWorld />
        <HelloWorld name="Alice" />
        <HelloWorld name="Bob" />
        <HelloWorld name="Jane" />
      </div>
    </>
  );
}

export default App;
