import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateForm from "./pages/CreateForm";
import SubmitForm from "./pages/SubmitForm";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreateForm />} />
        <Route path="/form/:id" element={<SubmitForm />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
