import "./App.css";
import db, { app } from "./config/app";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useState, useEffect } from "react";
import React from "react";
import SignUp from "./pages/SignUp";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Modal from "./components/Modal";

const App = () => {
  const [status, setStatus] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login setStatus={setStatus} />} />
        <Route path="/home" element={<Home status={status} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
