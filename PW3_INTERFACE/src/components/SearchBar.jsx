import React from 'react';

// de zoekbalk component
const SearchBar = (props) => {
  return (
    <aside className="sidebar">
      <section className="panel panel--steampunk">
        <div className="panel__studs">
          <span></span><span></span><span></span><span></span>
        </div>
        <h2>Zoeken</h2>
        <p className="label">Zoek op naam of nummer</p>
        <input
          className="search-input"
          type="text"
          placeholder="Bijv. castle, ghost, 10332..."
          value={props.waarde}
          onChange={(e) => props.onVerander(e.target.value)}
        />
        <p className="helper-text">
          Typ in het veld en de lijst wordt meteen bijgewerkt.
        </p>
      </section>
    </aside>
  );
};

export default SearchBar;
