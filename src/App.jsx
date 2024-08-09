import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import JobForm from "./components/JobForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/create-job" element={<JobForm />} />
      </Routes>
    </Router>
  );
}

export default App;
