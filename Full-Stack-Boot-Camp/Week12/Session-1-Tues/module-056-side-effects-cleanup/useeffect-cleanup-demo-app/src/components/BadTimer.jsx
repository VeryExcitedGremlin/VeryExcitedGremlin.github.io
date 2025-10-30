import { useState, useEffect } from "react";

export default function BadTimer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('%c BadTimer: Component mounted - starting interval', 'background: red; color: white; font-weight: bold; padding: 2px 5px;');

    // NO CLEANUP - This is the problem
    const intervalId = setInterval(() => {
      const newCount = count + 1;
      console.log('%c BadTimer: Timer tick - Interval still running!', 'background: red; color: white; padding: 2px 5px;', 'Count:', newCount);

      // This will try to update state even after component unmounts
      setCount((prev) => prev + 1);
    }, 1000);

    console.log('%c BadTimer: Interval ID:', 'color: red; font-weight: bold;', intervalId);
    console.warn('%c BadTimer: NO CLEANUP - This interval will keep running after unmount!', 'color: red; font-weight: bold; font-size: 14px;');

    // Missing: return function to clear the interval
    // This causes memory leaks when component unmounts
    // Correct code would be:
    // return () => clearInterval(intervalId);
  }, []);

  console.log('%c BadTimer: Rendering with count:', 'color: red;', count);

  return (
    <div>
      <p><strong>Count:</strong> {count}</p>
      <p>This timer has no cleanup function</p>
    </div>
  );
}
