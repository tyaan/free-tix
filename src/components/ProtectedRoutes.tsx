import { Navigate } from "react-router-dom";
import { useContext, ReactNode } from "react";
import { AuthContext } from "../context/AuthContext";

// Define props for ProtectedRoute
interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return <div>Error: AuthContext is not available</div>;
  }

  const { isAuthenticated } = authContext;

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
