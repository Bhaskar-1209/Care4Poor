import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const AdminLayout = lazy(() => import("../../innovate4change/AdminLayouts/AdminLayout"));
const UploadProject = lazy(() => import("../../innovate4change/Pages/Upload"));
const Projects = lazy(() => import("../../innovate4change/Pages/Projects"));
const AddUser = lazy(() => import("../../innovate4change/Pages/AddUser"));
const UserList = lazy(() => import("../../innovate4change/Pages/UserList"));
const ChangePassword = lazy(() => import("../../innovate4change/Pages/ChangePassword"));

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