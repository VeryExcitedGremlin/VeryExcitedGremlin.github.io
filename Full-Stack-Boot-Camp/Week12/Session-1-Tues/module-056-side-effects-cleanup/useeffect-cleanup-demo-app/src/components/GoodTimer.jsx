import { useState, useEffect } from "react";

export default function GoodTimer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('%c GoodTimer: Component mounted - starting interval', 'background: green; color: white; font-weight: bold; padding: 2px 5px;');

    // WITH CLEANUP - This is the solution
    const timerId = setInterval(() => {
      setCount((prev) => {
        const newCount = prev + 1;
        console.log('%c GoodTimer: Timer tick', 'background: green; color: white; padding: 2px 5px;', 'Count:', newCount);
        return newCount;
      });
    }, 1000);

    console.log('%c GoodTimer: Interval ID:', 'color: green; font-weight: bold;', timerId);
    console.log('%c GoodTimer: Has cleanup function - interval will be cleared on unmount', 'color: green; font-weight: bold; font-size: 14px;');

    // CLEANUP FUNCTION - This prevents memory leaks
    // React will run this function when GoodTimer is removed from the page
    // This happens when you switch to a page without GoodTimer or unmount the component
    return () => {
      console.log('%c GoodTimer: CLEANUP STARTING - Clearing interval with ID:', 'background: green; color: white; font-weight: bold; padding: 2px 5px;', timerId);
      clearInterval(timerId);
      console.log('%c GoodTimer: CLEANUP COMPLETE - Timer stopped successfully!', 'background: green; color: white; font-weight: bold; padding: 2px 5px;');
    };
  }, []);

  console.log('%c GoodTimer: Rendering with count:', 'color: green;', count);

  return (
    <div>
      <p><strong>Count:</strong> {count}</p>
      <p>This timer has a proper cleanup function</p>
    </div>
  );
}
