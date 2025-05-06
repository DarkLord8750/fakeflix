import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const isAdmin = useAdmin();

  if (loading) return <div>Loading...</div>;

  // If no user or not admin, redirect to home or login
  if (!user || !isAdmin) return <Navigate to="/" replace />;

  return children;
};

export default AdminRoute;
