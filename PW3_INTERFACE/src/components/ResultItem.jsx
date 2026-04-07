import React from 'react';

const ResultItem = ({ set }) => {
  return (
    <article className="set-card">
      <div className="set-card__studs">
        <span></span><span></span><span></span>
      </div>

      <div className="set-card__image-wrap">
        <img className="set-card__image" src={set.image} alt={set.name} />
      </div>

      <div className="set-card__body">
        <p className="set-card__number">Setnummer: {set.setNumber}</p>
        <h3 className="set-card__title">{set.name}</h3>
        <p className="set-card__meta">{set.pieces} onderdelen · {set.year}</p>
        <button className="set-card__button" type="button">Bekijk set</button>
      </div>
    </article>
  );
};

export default ResultItem;
