import React from 'react'
import LoginForm from './Login/LoginForm'
import Dashboard from './Dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    )
}

export default App