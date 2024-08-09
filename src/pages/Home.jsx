import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JobList from "../components/JobList";
import JobSearch from "../components/JobSearch";

function Home() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    location: "",
    industry: "",
    jobType: "",
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        let response;
        if (filters.location) {
          response = await fetch("http://localhost:5000/api/jobs/location", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ location: filters.location }),
          });
        } else if (filters.industry) {
          response = await fetch("http://localhost:5000/api/jobs/industry", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ industry: filters.industry }),
          });
        } else if (filters.jobType) {
          response = await fetch("http://localhost:5000/api/jobs/jobType", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ jobType: filters.jobType }),
          });
        } else {
          response = await fetch("http://localhost:5000/api/jobs");
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, [filters]);

  return (
    <div>
      <h1>Job Board</h1>
      <JobSearch setFilters={setFilters} />
      <JobList jobs={jobs} />
      <Link to="/create-job">Create a New Job</Link>
    </div>
  );
}

export default Home;
