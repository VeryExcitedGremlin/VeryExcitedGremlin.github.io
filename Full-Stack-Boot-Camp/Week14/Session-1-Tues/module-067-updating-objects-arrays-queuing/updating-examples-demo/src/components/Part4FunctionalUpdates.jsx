import { useState } from "react";

export default function Part4FunctionalUpdates() {
  const [counter, setCounter] = useState(0);
  const [batchResults, setBatchResults] = useState([]);

  const batchUpdateWrong = () => {
    console.log("WRONG: Using stale closures in batch updates");
    console.log("Initial counter value:", counter);

    setBatchResults([]);
    setCounter(counter + 1); // Uses current counter
    setCounter(counter + 1);
    setCounter(counter + 1);

    setBatchResults([
      `Update 1: ${counter} + 1 = ${counter + 1}`,
      `Update 2: ${counter} + 1 = ${counter + 1} (stale!)`,
      `Update 3: ${counter} + 1 = ${counter + 1} (stale!)`,
    ]);
  };

  const batchUpdateRight = () => {
    console.log("batchUpdateRight");
    setBatchResults([]);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1); // prev will have the correct value here for the counter
    setCounter((prev) => prev + 1);
  };

  return (
    <>
      <h2>{counter}</h2>
      <button onClick={batchUpdateWrong} className="btn-wrong">
        updateCount by 3 Wrong
      </button>
      <button onClick={batchUpdateRight} className="btn-right">
        updateCount by 3 Right
      </button>
    </>
  );
}
