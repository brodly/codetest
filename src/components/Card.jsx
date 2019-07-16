/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ card }) => {
  const {
    name,
    desc,
    fact,
    img_url,
  } = card;

  return (
    <div className="card">
      <h3 className="card-title">{name}</h3>
      <img src={img_url} className="card-image" alt="" />
      <div className="card-content">
        <p className="card-text">{desc}</p>
        <br />
        <h4 className="fact-title">Factoid:</h4>
        <p className="card-text">{fact}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
    desc: PropTypes.string,
    fact: PropTypes.string,
    img_url: PropTypes.string,
  }),
};

Card.defaultProps = {
  card: {
    name: 'title',
    desc: 'description',
    fact: 'fact',
    img_url: 'url',
  },
};

export default Card;
