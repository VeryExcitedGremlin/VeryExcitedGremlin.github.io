import { useState } from 'react'
import HelloWorldInline from "./HelloWorld/HelloWorld";
import {HelloWorld} from './HelloWorld/HelloWorld';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Module 47 - Intro to React</h1>
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
