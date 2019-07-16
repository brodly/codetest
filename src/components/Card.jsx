/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '.';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Title',
      desc: 'Description',
      fact: 'Fact',
      img_url: 'Image Url',
      editMode: false,
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const { card } = this.props;
    const { name, desc, fact, img_url } = card;
    this.setState({ name, desc, fact, img_url });
  }

  onChange(e) {
    console.log(e.target.id);
    this.setState({ [e.target.id]: e.target.value });
  }

  handleEdit() {
    let { editMode } = this.state;
    editMode = !editMode;
    this.setState({ editMode });
  }

  render() {
    const { editMode } = this.state;
    const { card } = this.props;
    const { name, desc, fact, img_url } = card;

    return (
      <div className="card">
        <h3 className="card-title">
          {editMode
            ? (<input id="name" type="text" value={this.state.name} onChange={this.onChange} />)
            : name}
        </h3>
        {editMode
          ? (<input id="img_url" type="text" value={this.state.img_url} onChange={this.onChange} />)
          : (<img src={img_url} className="card-image" alt="" />)}
        <div className="card-content">
          <p className="card-text">
            {editMode
              ? (<input id="desc" type="text" value={this.state.desc} onChange={this.onChange} />)
              : desc}
          </p>
          <br />
          <h4 className="fact-title">
            {fact !== ''
              ? 'Factoid:'
              : ''}
          </h4>
          <p className="card-text">
            {editMode
              ? (<input id="fact" type="text" value={this.state.fact} onChange={this.onChange} />)
              : fact}
          </p>
        </div>
        <Button type="secondary" name="Edit" event={this.handleEdit} />
      </div>
    );
  }
}

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
    name: '',
    desc: 'Uh oh! There are no cards in the deck. Feel free to add some of your own.',
    fact: '',
    img_url: '',
  },
};

export default Card;
