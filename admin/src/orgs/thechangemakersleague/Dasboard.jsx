import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const AdminLayout = lazy(() => import("../../thechangemakesleague/AdminLayouts/AdminLayout"));
const UploadProject = lazy(() => import("../../thechangemakesleague/Pages/Upload"));
const Projects = lazy(() => import("../../thechangemakesleague/Pages/Projects"));
const AddUser = lazy(() => import("../../thechangemakesleague/Pages/AddUser"));
const UserList = lazy(() => import("../../thechangemakesleague/Pages/UserList"));
const ChangePassword = lazy(() => import("../../thechangemakesleague/Pages/ChangePassword"));

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