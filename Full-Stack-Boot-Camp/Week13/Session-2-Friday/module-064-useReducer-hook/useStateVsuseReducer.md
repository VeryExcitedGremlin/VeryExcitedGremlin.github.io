### Before (useState - Gets messy with complex state):

```javascript
function Counter() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(null);

  function increment() {
    setCount(count + 1);
    setHistory([...history, 'Incremented']);
    setError(null);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
      setHistory([...history, 'Decremented']);
      setError(null);
    } else {
      setError('Cannot go below zero!');
    }
  }

  function reset() {
    setCount(0);
    setHistory([]);
    setError(null);
  }

  // State updates are scattered across multiple functions
  // Easy to forget to update all related state
}
```


### After (useReducer - Clean and organized):

```javascript
const initialState = {
  count: 0,
  history: [],
  error: null
};

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        history: [...state.history, 'Incremented'],
        error: null
      };

    case 'DECREMENT':
      if (state.count > 0) {
        return {
          ...state,
          count: state.count - 1,
          history: [...state.history, 'Decremented'],
          error: null
        };
      }
      return { ...state, error: 'Cannot go below zero!' };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  // All state update logic is in the reducer
  // Just dispatch actions to trigger updates
  return (
    <button onClick={() => dispatch({ type: 'INCREMENT' })}>
      Count: {state.count}
    </button>
  );
}
```