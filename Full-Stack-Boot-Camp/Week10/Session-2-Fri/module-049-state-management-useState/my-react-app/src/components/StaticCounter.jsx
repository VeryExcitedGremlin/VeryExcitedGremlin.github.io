export default function StaticCounter() {
    // broken because react doesn't know that count updates
  let count = 0;

  return (
    <div>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          count++;
        }}
      >
        Increment Count
      </button>
    </div>
  );
}
