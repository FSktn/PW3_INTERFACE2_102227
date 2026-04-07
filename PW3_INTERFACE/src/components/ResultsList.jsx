import React from 'react';
import ResultItem from './ResultItem';

const ResultsList = ({ sets }) => {
  return (
    <section className="content">
      <div className="content__frame">
        <div className="content__topbar">
          <div>
            <p className="section-label">Set overzicht</p>
            <h2>Beschikbare LEGO-sets</h2>
          </div>
          <p className="result-count">
            {sets.length} {sets.length === 1 ? 'resultaat' : 'resultaten'}
          </p>
        </div>

        <div className="results-grid">
          {sets.length > 0 ? (
            sets.map((set) => <ResultItem key={set.setNumber} set={set} />)
          ) : (
            <div className="empty-state">
              Geen LEGO-sets gevonden voor deze zoekopdracht.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResultsList;
