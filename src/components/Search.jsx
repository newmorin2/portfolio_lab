import React from "react";

function Search({searchTerm, onSearch}) {
  return (
    <div className="search">
        <h2>Search Projects</h2>
        <input 
          type="text" 
          placeholder="Search by project name..." 
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
        />
    </div>
  )
}
export default Search;