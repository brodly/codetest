/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '.';
import routes from '../routes';

class NewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      desc: '',
      fact: '',
      img_url: '',
    };

    this.onCancel = this.onCancel.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  onCancel() {
    this.closeModal();
  }

  onConfirm() {
    const card = this.state;
    const { handleOnCreate } = this.props;
    this.closeModal();
    routes.createCard(card);
    handleOnCreate(card);
  }

  closeModal() {
    const { closeModal } = this.props;
    closeModal();
    this.setState({
      name: '',
      desc: '',
      fact: '',
      img_url: '',
    });
  }

  render() {
    const {
      name,
      desc,
      fact,
      img_url,
    } = this.state;

    return (
      <div>
        <div className="card-title">
          <div className="edit-label">Title:</div>
          <input id="name" type="text" value={name} onChange={this.onChange} />
        </div>
        <div className="card-image">
          <div className="edit-label" style={{ marginLeft: '20px' }}>Image URL:</div>
          <input id="img_url" type="text" value={img_url} onChange={this.onChange} />
        </div>
        <div className="card-content">
          <div className="edit-label">Description:</div>
          <textarea id="desc" type="text" value={desc} onChange={this.onChange} />
          <div className="edit-label">Fact:</div>
          <textarea id="fact" type="text" value={fact} onChange={this.onChange} />
        </div>
        <div className="button-container">
          <Button type="alert" name="Cancel" event={this.onCancel} />
          <Button type="primary" name="Confirm" event={this.onConfirm} />
        </div>
      </div>
    );
  }
}

NewCard.propTypes = {
  closeModal: PropTypes.func,
  handleOnCreate: PropTypes.func,
};

NewCard.defaultProps = {
  closeModal: () => {},
  handleOnCreate: () => {},
};

export default NewCard;
