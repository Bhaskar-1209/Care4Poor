import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const organizations = [
  "care4poor",
  "score4change",
  "debate4change",
  "express4change",
  "innovate4change",
  "thechangemakersleague",
];

const Login = () => {
  const [email, setEmail] = useState("bhaskar120@gmail.com");
  const [password, setPassword] = useState("Ambala@1");
  const [organization, setOrganization] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!organization) {
      toast.error("Please select an organization.");
      return;
    }

    try {
      const normalizedOrg = organization.toLowerCase();

      const res = await axios.post(`${API_BASE_URL}/api/users/login`, {
        email,
        password,
        organization: normalizedOrg,
      });

      // Save token and user info
      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("role", res.data.role);
      sessionStorage.setItem("name", res.data.name);
      sessionStorage.setItem("organization", normalizedOrg);

      toast.success("Login successful!");

      setTimeout(() => {
        navigate(`/${normalizedOrg}/dashboard/upload`);
      }, 1000);
    } catch (err) {
      const message = err.response?.data?.message || "Login failed. Try again.";
      toast.error(message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <ToastContainer position="top-right" autoClose={3000} />
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-md w-80 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Admin Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />

        <select
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        >
          <option value="">Select Organization</option>
          {organizations.map((org) => (
            <option key={org} value={org}>
              {org}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
