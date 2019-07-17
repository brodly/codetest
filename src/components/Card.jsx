/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '.';

const Card = ({ card, editMode, handleOnChange, handleOnEditSubmit }) => {
  let { name, desc, fact, img_url } = card;

  const onChange = (e) => {
    const newCard = {
      currentCard: card,
    };
    newCard.currentCard[e.target.id] = e.target.value;
    handleOnChange(newCard);
  };

  if (editMode) {
    name = (<input id="name" type="text" value={name} onChange={onChange} />);
    desc = (<input id="desc" type="text" value={desc} onChange={onChange} />);
    fact = (<input id="fact" type="text" value={fact} onChange={onChange} />);
    img_url = (<input id="img_url" type="text" value={img_url} onChange={onChange} />);
  }

  const handleOnEdit = () => {
    if (editMode) handleOnEditSubmit();
    handleOnChange({ editMode: !editMode });
  };

  return (
    <div className="card">
      <h3 className="card-title">{name}</h3>
      {<img src={img_url} className="card-image" alt="" />}
      <div className="card-content">
        <p className="card-text">{desc}</p>
        <br />
        <h4 className="fact-title">{fact !== '' ? 'Factoid:' : ''}</h4>
        <p className="card-text">{fact}</p>
      </div>
      <Button type="secondary" name="Edit" event={handleOnEdit} />
    </div>
  );
}

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
