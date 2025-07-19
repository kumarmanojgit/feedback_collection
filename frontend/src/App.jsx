import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateForm from "./pages/CreateForm";
import SubmitForm from "./pages/SubmitForm";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Register />} />
      <Route path="/create" element={<CreateForm />} />
      <Route path="/form/:id" element={<SubmitForm />} />
      <Route path="/dashboard/:id" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
