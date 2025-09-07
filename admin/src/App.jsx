// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Login from "./login/Login";

// Organization Dashboards
import Care4Poor from "./orgs/care4poor/care4poor";
import Score4Change from "./orgs/score4change/Dasboard";
import Debate4Change from "./orgs/debate4change/Dasboard";
import Express4Change from "./orgs/express4change/Dasboard";
import Innovate4Change from "./orgs/innovate4change/Dasboard";
import TheChangeMakersLeague from "./orgs/thechangemakersleague/Dasboard";

// Optional: 404 fallback
const NotFound = () => <div className="p-6">404 - Page Not Found</div>;

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Auth routes */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />

        {/* Organization Dashboards */}
        <Route path="/care4poor/dashboard/*" element={<Care4Poor />} />
        <Route path="/score4change/dashboard/*" element={<Score4Change />} />
        <Route path="/debate4change/dashboard/*" element={<Debate4Change />} />
        <Route path="/express4change/dashboard/*" element={<Express4Change />} />
        <Route path="/innovate4change/dashboard/*" element={<Innovate4Change />} />
        <Route path="/thechangemakersleague/dashboard/*" element={<TheChangeMakersLeague />} />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
