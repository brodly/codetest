/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, EditCard, DisplayCard } from '.';

const Card = ({ card, editMode, handleOnChange, handleOnEditSubmit }) => {
  const onChange = (key, value) => {
    const newCard = {
      currentCard: card,
    };
    newCard.currentCard[key] = value;
    handleOnChange(newCard);
  };

  const handleOnEdit = (action) => {
    if (editMode && action === 'Confirm') handleOnEditSubmit();
    handleOnChange({ editMode: !editMode });
  };

  return (
    <div className="card">
      {editMode
        ? <EditCard card={card} handleOnEdit={handleOnEdit} handleOnChange={onChange} />
        : <DisplayCard card={card} handleOnEdit={handleOnEdit} />
      }
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
  editMode: PropTypes.bool,
  handleOnChange: PropTypes.func,
  handleOnEditSubmit: PropTypes.func,
};

Card.defaultProps = {
  card: {
    name: '',
    desc: 'Uh oh! There are no cards in the deck. Feel free to add some of your own.',
    fact: '',
    img_url: '',
  },
  editMode: false,
  handleOnChange: () => {},
  handleOnEditSubmit: () => {},
};

export default Card;
