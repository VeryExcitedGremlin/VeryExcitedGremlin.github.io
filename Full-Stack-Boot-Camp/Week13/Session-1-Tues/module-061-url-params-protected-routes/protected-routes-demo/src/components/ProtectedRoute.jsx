// ProtectedRoute Component
// This component protects routes that require authentication
// If user is not logged in, they are redirected to the login page

import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({isLoggedIn, children}){
    // Get the current location (where the user tried to go)
    // this comes from the current address bar value
    const location = useLocation();

    //If the user is not logged in, redirect them to the login page

    if(!isLoggedIn){
      // We pass the current location in state so login page knows
      // where to redirect the user after successful login
      // The 'replace' option prevents the protected page from appearing in history
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;

}

export default ProtectedRoute;