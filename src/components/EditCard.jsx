/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '.';


const EditCard = ({ card, handleOnChange, handleOnEdit }) => {
  const {
    name,
    img_url,
    desc,
    fact,
  } = card;

  const onChange = (e) => {
    handleOnChange(e.target.id, e.target.value);
  };

  const onClick = (e) => {
    handleOnEdit(e.target.innerHTML);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <div className="edit-label">Title:</div>
        <input id="name" type="text" value={name} onChange={onChange} />
      </div>
      <div>
        <div className="edit-label">Image URL:</div>
        <input id="img_url" type="text" value={img_url} onChange={onChange} />
      </div>
      <div>
        <div className="edit-label">Description:</div>
        <textarea id="desc" type="text" value={desc} onChange={onChange} />
        <div className="edit-label">Fact:</div>
        <textarea id="fact" type="text" value={fact} onChange={onChange} />
      </div>
      <div className="button-container">
        <Button type="alert" name="Cancel" event={onClick} />
        <Button type="primary" name="Confirm" event={onClick} />
      </div>
    </div>
  );
};

EditCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
    desc: PropTypes.string,
    fact: PropTypes.string,
    img_url: PropTypes.string,
  }),
  handleOnChange: PropTypes.func,
  handleOnEdit: PropTypes.func,
};

EditCard.defaultProps = {
  card: {
    name: '',
    img_url: '',
    desc: '',
    fact: '',
  },
  handleOnChange: () => {},
  handleOnEdit: () => {},
};

export default EditCard;
