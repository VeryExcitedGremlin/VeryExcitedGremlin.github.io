export default function UserProfile({ user }) {
  return (
    <div>
      {/* Display user information if not null or undefined */}
      {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining */}

      {/* ?. will not throw an error if we check if the property is there */}

      {/* this is the broken example if null or undefined */}

      {/* Broken Example part 2 */}
      {/* <h3>Name: {user.name}</h3>
      <p>Email: {user.email}</p> */}

      {user?.name && user?.email && (
        <div>
          <h3>Name: {user.name}</h3>
          <p>Email: {user.email}</p>
        </div>
      )}

      {/* Else show that our user isn't available */}
      {!user?.name && !user?.email && <p>No user data available</p>}
    </div>
  );
}
