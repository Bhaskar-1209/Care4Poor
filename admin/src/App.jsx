// AdminApp.jsx
import React, { lazy, Suspense } from "react";

// Lazy load components
const Care4Poor = lazy(() => import("./care4poor/care4poor"));

const AdminApp = () => {
  return (
    <Care4Poor />
    // <Router>
    //   <ScrollToTop />
    //   <Suspense fallback={<div className="p-6 text-white">Loading...</div>}>
    //     <Routes>
    //       {/* Redirect root to /login */}
    //       <Route path="/" element={<Navigate to="/login" replace />} />

    //       {/* Login page */}
    //       <Route path="/login" element={<Login />} />

    //       {/* Redirect /admin to upload or login based on token */}
    //       <Route
    //         path="/admin"
    //         element={
    //           sessionStorage.getItem("token") ? (
    //             <Navigate to="/admin/upload" replace />
    //           ) : (
    //             <Navigate to="/login" replace />
    //           )
    //         }
    //       />

    //       {/* Protected admin routes */}
    //       <Route
    //         path="/admin/*"
    //         element={
    //           <RequireAuth>
    //             <AdminLayout />
    //           </RequireAuth>
    //         }
    //       >
    //         <Route path="upload" element={<UploadProject />} />
    //         <Route path="projects" element={<Projects />} />
    //         <Route path="user-list" element={<UserList />} />
    //         <Route path="add-user" element={<AddUser />} />
    //         <Route path="change-password" element={<ChangePassword />} />
    //       </Route>

    //       {/* Fallback route */}
    //       <Route path="*" element={<div className="p-6">404 - Not Found</div>} />
    //     </Routes>
    //   </Suspense>
    // </Router>
  );
};

export default AdminApp;