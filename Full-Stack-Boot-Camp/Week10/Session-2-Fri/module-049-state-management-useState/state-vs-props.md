```jsx
// PROPS: Data coming FROM parent (read-only)
function UserProfile({ userName, userEmail }) {
  return (
    <div>
      <h3>{userName}</h3> {/* Can't change this here! */}
      <p>{userEmail}</p>  {/* Props are immutable */}
    </div>
  );
}

// STATE: Data managed WITHIN component (changeable)
function UserProfile({ userName, userEmail }) {
  const [isEditing, setIsEditing] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <div>
      <h3>{userName}</h3>
      {isEditing ? (
        <input defaultValue={userName} />
      ) : (
        <p>{userName}</p>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide' : 'Show'} Details
      </button>
    </div>
  );
}
```