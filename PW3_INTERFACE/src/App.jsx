import { useState } from 'react';
import './App.css';
import { legoSets } from './data';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';

function App() {
  // de zoekterm van de gebruiker
  const [zoekopdracht, setZoekopdracht] = useState('');

  // lijst filteren op wat de gebruiker typt
  const gefilterdeSets = legoSets.filter((item) => {
    const zoekje = zoekopdracht.toLowerCase().trim();
    if (zoekje === '') return true; // alles tonen bij leeg veld
    
    return (
      item.naam.toLowerCase().includes(zoekje) ||
      item.setNummer.toLowerCase().includes(zoekje)
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
        {/* zoekbalk krijgt state en functie via props */}
        <SearchBar waarde={zoekopdracht} onVerander={setZoekopdracht} />
        
        {/* de lijst krijgt de gefilterde data */}
        <ResultsList data={gefilterdeSets} />
      </main>
    </div>
  );
}

export default App;
