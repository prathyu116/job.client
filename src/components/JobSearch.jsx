import React, { useState } from "react";

function JobSearch({ setFilters }) {
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [jobType, setJobType] = useState("");

  const handleSearch = () => {
    setFilters({
      location,
      industry,
      jobType,
    });
  };

  return (
    <div>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Filter by location"
      />
      <input
        type="text"
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
        placeholder="Filter by industry"
      />
      <input
        type="text"
        value={jobType}
        onChange={(e) => setJobType(e.target.value)}
        placeholder="Filter by job type"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default JobSearch;
