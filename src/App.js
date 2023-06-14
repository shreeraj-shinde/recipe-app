import "./App.css";
import db, { app } from "./config/app";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useState, useEffect } from "react";
import React from "react";
import SignUp from "./pages/SignUp";

const App = () => {
  const [status, setStatus] = useState(false);
  useEffect(() => {}, []);
  return <div>{status ? <Home /> : <Login setStatus={setStatus} />}</div>;
};

export default App;
