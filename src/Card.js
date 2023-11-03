// Card.js
import React from 'react';

const Card = ({ title, value,location, hasButton }) => {
  const redirectToMap = () => {
    // Replace 'https://your-map-url.com' with the actual URL of your map
    window.location.href = `https://www.google.com/maps/search/?api=1&query=${location}`;
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="value">{value}</div>
      {hasButton && <button className="button" onClick={redirectToMap}>View Location</button>}
    </div>
  );
};

export default Card;
