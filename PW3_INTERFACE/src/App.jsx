import { useState } from 'react';
import './App.css';
import { sets } from './data';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSets = sets.filter((set) => {
    const q = searchTerm.trim().toLowerCase();
    return (
      set.name.toLowerCase().includes(q) ||
      set.setNumber.toLowerCase().includes(q)
    );
  });

  return (
    <div className="app-shell">
      <header className="hero hero--steampunk">
        <div className="hero__left">
          <p className="hero__eyebrow">Hej Lego World</p>
          <h1>Steampunk Station</h1>
          <p className="hero__text">
            Welkom bij de kiosk van de Steampunk Station zone. Ontdek een wereld vol tandwielen, koper en Victoriaanse futurisme.
          </p>
          <div className="hero__chips">
            <span className="chip chip--copper">Tandwielen</span>
            <span className="chip chip--brass">Stoom</span>
            <span className="chip chip--iron">Uitvindingen</span>
          </div>
        </div>
      </header>

      <main className="layout">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <ResultsList sets={filteredSets} />
      </main>
    </div>
  );
}

export default App;
