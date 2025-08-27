import React from "react";
import "../css/SearchBar.css";

const SearchBar = ({ query, setQuery }) => (
  <input
    className="search-bar"
    type="text"
    placeholder="Search foods..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
);

export default SearchBar;
