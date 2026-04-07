import { useState } from 'react';
import './App.css';
import { legoSets } from './data';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';

function App() {
  // State voor de zoekterm die de gebruiker invult
  const [zoekopdracht, setZoekopdracht] = useState('');

  // Hier filteren we de lijst op basis van wat de gebruiker typt
  const gefilterdeSets = legoSets.filter((item) => {
    const zoekje = zoekopdracht.toLowerCase().trim();
    if (zoekje === '') return true; // Toon alles als er niks getypt is
    
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
        {/* De zoekbalk krijgt de state en de functie mee via props */}
        <SearchBar waarde={zoekopdracht} onVerander={setZoekopdracht} />
        
        {/* De lijst krijgt alleen de gefilterde data mee */}
        <ResultsList data={gefilterdeSets} />
      </main>
    </div>
  );
}

export default App;
