// orgs/care4poor/care4poor.jsx
import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const AdminLayout = lazy(() => import("../../care4poor/AdminLayouts/AdminLayout"));
const UploadProject = lazy(() => import("../../care4poor/Pages/Upload"));
const Projects = lazy(() => import("../../care4poor/Pages/Projects"));
const AddUser = lazy(() => import("../../care4poor/Pages/AddUser"));
const UserList = lazy(() => import("../../care4poor/Pages/UserList"));
const ChangePassword = lazy(() => import("../../care4poor/Pages/ChangePassword"));

const Care4PoorRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route/>
        <Route path="upload" element={<UploadProject />} />
        <Route path="projects" element={<Projects />} />
        <Route path="user-list" element={<UserList />} />
        <Route path="add-user" element={<AddUser />} />
        <Route path="change-password" element={<ChangePassword />} />
      </Route>
    </Routes>
  );
};

export default Care4PoorRoutes;
