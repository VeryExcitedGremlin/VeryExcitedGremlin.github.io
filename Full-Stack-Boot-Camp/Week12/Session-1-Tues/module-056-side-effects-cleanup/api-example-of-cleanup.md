```jsx
//Note: this use case is only affected for a brief period of time, but can still cause
// unwanted console errors, another alternative is using abort, but sometimes
//using this flag method is better
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Flag to prevent state updates if component unmounts during fetch
    // This prevents React warnings and potential memory leaks
    let isCancelled = false;

    async function fetchUser() {
      try {
        setLoading(true);
        const response = await fetch(`/api/users/${userId}`);
        const userData = await response.json();

        // Critical: Only update state if component is still mounted
        // Without this check, unmounting during fetch causes React warnings
        if (!isCancelled) {
          setUser(userData);
          setLoading(false);
        }
      } catch (error) {
        // Also guard error handling to prevent state updates on unmounted components
        if (!isCancelled) {
          console.error('Failed to fetch user:', error);
          setLoading(false);
        }
      }
    }

    fetchUser();

    // Cleanup: Set flag to prevent any pending state updates
    // This runs when component unmounts or userId changes
    return () => {
      isCancelled = true;
    };
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  return <div>User: {user?.name}</div>;
}

export default UserProfile;

```