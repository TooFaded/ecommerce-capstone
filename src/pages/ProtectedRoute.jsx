import { Outlet, Navigate } from "react-router-dom";

// Custom ProtectedRoute component
function ProtectedRoute({ isAuthenticated }) {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
