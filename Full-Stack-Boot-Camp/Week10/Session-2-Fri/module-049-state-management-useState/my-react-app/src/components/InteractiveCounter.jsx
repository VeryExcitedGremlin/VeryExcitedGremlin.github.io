import { useState } from "react";

export default function InteractiveCounter() {
  const [count, setCount] = useState(0); // useState returns [ value, function]


  // alternatively we could do the following
  // const stateArray = useState(0);
  // const count = stateArray[0]
  // const setCount = stateArray[1]

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
