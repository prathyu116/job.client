import React, { useState } from "react";

function JobForm() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [jobType, setJobType] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          company,
          location,
          industry,
          jobType,
          description,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create job");
      }

      const data = await response.json();
      setMessage("Job created successfully!");
      // Clear form fields
      setTitle("");
      setCompany("");
      setLocation("");
      setIndustry("");
      setJobType("");
      setDescription("");
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Create Job Opening</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Company:
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Location:
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Industry:
            <input
              type="text"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Job Type:
            <input
              type="text"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Create Job</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default JobForm;
