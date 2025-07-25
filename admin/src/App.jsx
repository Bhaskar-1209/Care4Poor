// AdminApp.jsx
import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

// Lazy load components
const AdminLayout = lazy(() => import("./care4poor/AdminLayouts/AdminLayout"));
const UploadProject = lazy(() => import("./care4poor/Pages/Upload"));
const Projects = lazy(() => import("./care4poor/Pages/Projects"));
const AddUser = lazy(() => import("./care4poor/Pages/AddUser"));
const Login = lazy(() => import("./care4poor/Pages/Login"));
const UserList = lazy(() => import("./care4poor/Pages/UserList"));
const ChangePassword = lazy(() => import("./care4poor/Pages/ChangePassword"));

// Auth protection wrapper
const RequireAuth = ({ children }) => {
  const token = sessionStorage.getItem("token");
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

const AdminApp = () => {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div className="p-6 text-white">Loading...</div>}>
        <Routes>
          {/* Redirect root to /login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Login page */}
          <Route path="/login" element={<Login />} />

          {/* Redirect /admin to upload or login based on token */}
          <Route
            path="/admin"
            element={
              sessionStorage.getItem("token") ? (
                <Navigate to="/admin/upload" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Protected admin routes */}
          <Route
            path="/admin/*"
            element={
              <RequireAuth>
                <AdminLayout />
              </RequireAuth>
            }
          >
            <Route path="upload" element={<UploadProject />} />
            <Route path="projects" element={<Projects />} />
            <Route path="user-list" element={<UserList />} />
            <Route path="add-user" element={<AddUser />} />
            <Route path="change-password" element={<ChangePassword />} />
          </Route>

          {/* Fallback route */}
          <Route path="*" element={<div className="p-6">404 - Not Found</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AdminApp;