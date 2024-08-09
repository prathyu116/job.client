import React from "react";
import { Link } from "react-router-dom";

function JobList({ jobs }) {
  return (
    <div>
      {jobs.map((job) => (
        <div key={job._id}>
          <Link to={`/jobs/${job._id}`}>
            <h2>{job.title}</h2>
            <p>{job.company}</p>
            <p>{job.location}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default JobList;
