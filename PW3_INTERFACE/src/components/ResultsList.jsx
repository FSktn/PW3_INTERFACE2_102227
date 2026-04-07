import React from 'react';

// Kleine kaart voor één LEGO set
const ResultItem = (props) => {
  const set = props.item;
  
  return (
    <article className="set-card">
      <div className="set-card__studs">
        <span></span><span></span><span></span>
      </div>

      <div className="set-card__image-wrap">
        <img className="set-card__image" src={set.foto} alt={set.naam} />
      </div>

      <div className="set-card__body">
        <p className="set-card__number">Set: {set.setNummer}</p>
        <h3 className="set-card__title">{set.naam}</h3>
        <p className="set-card__meta">{set.onderdelen} stukjes · {set.jaar}</p>
        <button className="set-card__button" type="button">Details</button>
      </div>
    </article>
  );
};

// De totale lijst met resultaten
const ResultsList = (props) => {
  // Als er geen resultaten zijn laten we een melding zien
  if (props.data.length === 0) {
    return (
      <section className="content">
        <div className="empty-state">
           Helaas, niks gevonden! Probeer een andere zoekopdracht.
        </div>
      </section>
    );
  }

  return (
    <section className="content">
      <div className="content__frame">
        <div className="content__topbar">
          <div>
            <p className="section-label">Overzicht</p>
            <h2>Onze LEGO Collectie</h2>
          </div>
          <p className="result-count">
            {props.data.length} {props.data.length === 1 ? 'resultaat' : 'resultaten'}
          </p>
        </div>

        <div className="results-grid">
          {props.data.map((setje) => (
            <ResultItem key={setje.setNummer} item={setje} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsList;
