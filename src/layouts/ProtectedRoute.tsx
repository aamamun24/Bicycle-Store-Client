import { ReactNode } from "react";
import { useAppSelector } from "../redux/hooks";
import { selectCurrentToken } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { Navigate } from "react-router-dom";

type TProtectedRoute = {
  children: ReactNode;
  allowedRoles: ("admin" | "customer")[];
};

const ProtectedRoute = ({ children, allowedRoles }: TProtectedRoute) => {
  const token = useAppSelector(selectCurrentToken);
  let user;

  if (token) {
    user = verifyToken(token); // Decode token to get user details
  }

  // Check if the user's role matches any of the allowed roles
  const isAuthorized = allowedRoles.includes(user?.role);

  if (!token || !isAuthorized) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
