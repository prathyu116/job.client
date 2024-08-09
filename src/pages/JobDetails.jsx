import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function JobDetail() {
  const { id } = useParams(); // Get the job ID from the route parameters
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/jobs/${id}`);
        if (!response.ok) {
          throw new Error("Job not found");
        }
        const data = await response.json();
        setJob(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{job.title}</h1>
      <h2>{job.company}</h2>
      <p>
        <strong>Location:</strong> {job.location}
      </p>
      <p>
        <strong>Industry:</strong> {job.industry}
      </p>
      <p>
        <strong>Job Type:</strong> {job.jobType}
      </p>
      <p>
        <strong>Description:</strong> {job.description}
      </p>
    </div>
  );
}

export default JobDetail;
