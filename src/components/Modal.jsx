import React from 'react';
import PropTypes from 'prop-types';
import { NewCard } from '.';

const Modal = ({ handleClose, show, handleOnCreate }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="card">
          <NewCard closeModal={handleClose} handleOnCreate={handleOnCreate} />
        </div>
      </section>
    </div>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func,
  handleOnCreate: PropTypes.func,
  show: PropTypes.bool,
};

Modal.defaultProps = {
  handleClose: () => {},
  handleOnCreate: () => {},
  show: false,
};

export default Modal;
