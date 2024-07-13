import React from 'react';
import './BasketballPlayerCard.css';
const BasketballPlayerCard = ({ name, image, position, stats }) => {
    return (
      <div className="player-card">
         <article class="card">
        <header className="card__thumb">
        <img src={image} alt={name} className="player-image" />
        </header>
        <div className="card__body">
        <h2 className="player-name">{name}</h2>
        <p className="player-position">{position}</p>
        <div className="player-stats">
          <p>Points per Game: {stats.pointsPerGame}</p>
          <p>Assists per Game: {stats.assistsPerGame}</p>
          <p>Rebounds per Game: {stats.reboundsPerGame}</p>
        </div>
        </div>
        </article>
      </div>
    );
  };
  export default BasketballPlayerCard;

