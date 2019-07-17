/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '.';

const DisplayCard = ({ card, handleOnEdit }) => {
  const {
    name,
    img_url,
    desc,
    fact,
  } = card;

  const onEditButtonClick = (e) => {
    handleOnEdit(e.target.innerHTML);
  };

  return (
    <div>
      <div>
        <h3 className="card-title">{name}</h3>
        <img src={img_url} className="card-image" alt="" />
        <div className="card-content">
          <p className="card-text">{desc}</p>
          <br />
          <h4 className="fact-title">Fact:</h4>
          <p className="card-text">{fact}</p>
        </div>
        <div className="button-container">
          <Button type="secondary" name="Edit" event={onEditButtonClick} />
        </div>
      </div>
    </div>
  );
};

DisplayCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
    desc: PropTypes.string,
    fact: PropTypes.string,
    img_url: PropTypes.string,
  }),
  handleOnEdit: PropTypes.func,
};

DisplayCard.defaultProps = {
  card: {
    name: '',
    img_url: '',
    desc: '',
    fact: '',
  },
  handleOnEdit: () => { },
};

export default DisplayCard;
