import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Check if user is logged in
  return token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
