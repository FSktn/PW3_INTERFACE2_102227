import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <aside className="sidebar">
      <section className="panel panel--steampunk">
        <div className="panel__studs">
          <span></span><span></span><span></span><span></span>
        </div>
        <h2>Zoeken</h2>
        <label className="label" htmlFor="searchInput">Zoek op naam of setnummer</label>
        <input
          id="searchInput"
          className="search-input"
          type="text"
          placeholder="Bijv. castle, ghost, 10332..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <p className="helper-text">
          Typ in het veld en filter direct door de beschikbare sets.
        </p>
      </section>
    </aside>
  );
};

export default SearchBar;
