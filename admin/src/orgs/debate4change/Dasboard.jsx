// orgs/debate4change/debate4change.jsx
import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const AdminLayout = lazy(() => import("../../debate4change/AdminLayouts/AdminLayout"));
const UploadProject = lazy(() => import("../../debate4change/Pages/Upload"));
const Projects = lazy(() => import("../../debate4change/Pages/Projects"));
const AddUser = lazy(() => import("../../debate4change/Pages/AddUser"));
const UserList = lazy(() => import("../../debate4change/Pages/UserList"));
const ChangePassword = lazy(() => import("../../debate4change/Pages/ChangePassword"));

const Dashboard = () => {
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

export default Dashboard;
