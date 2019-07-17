/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import routes from './routes';
import { Card, Button } from './components';
import '../public/styles.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Crypto Facts',
      cards: [],
      currentCardIndex: 0,
      currentCard: {
        name: 'Loading...',
        desc: 'Loading...',
        fact: 'Loading...',
        img_url: 'Loading...',
      },
      editMode: false,
    };

    this.fetchCard = this.fetchCard.bind(this);
    this.fetchCards = this.fetchCards.bind(this);
    this.handleOnNext = this.handleOnNext.bind(this);
    this.handleOnDelete = this.handleOnDelete.bind(this);
    this.handleOnCreate = this.handleOnCreate.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnEditSubmit = this.handleOnEditSubmit.bind(this);

    this.fetchCards();
  }

  async fetchCard(name) {
    try {
      const cards = await routes.fetchCard(name);
      this.setState({ cards });
    } catch (err) {
      console.log(err);
    }
  }

  async fetchCards() {
    const { currentCardIndex } = this.state;
    try {
      const cards = await routes.fetchCards();
      const currentCard = Object.assign({}, cards[currentCardIndex]);
      this.setState({ cards, currentCard });
    } catch (err) {
      console.log(err);
    }
  }

  handleOnChange(data) {
    this.setState(data);
  }

  handleOnNext() {
    const { cards } = this.state;
    let { currentCard, currentCardIndex } = this.state;

    if (currentCardIndex === cards.length - 1) currentCardIndex = 0;
    else currentCardIndex += 1;

    currentCard = Object.assign({}, cards[currentCardIndex]);

    this.setState({ currentCard, currentCardIndex });
  }

  handleOnCreate(card) {
    routes.createCard(card);
  }

  handleOnDelete() {
    let { cards, currentCardIndex, currentCard } = this.state;
    const confirmDelete = confirm('Are you sure you want to delete this card?');

    if (confirmDelete) {
      cards = cards.filter(item => item.name !== currentCard.name);
      if (currentCardIndex > 0) currentCardIndex -= 1;
      routes.deleteCard(currentCard.name);
      currentCard = Object.assign({}, cards[currentCardIndex]);
      this.setState({ cards, currentCard, currentCardIndex });
    }
  }

  handleOnEditSubmit() {
    const { cards, currentCard, currentCardIndex } = this.state;
    const { name } = cards[currentCardIndex];
    routes.updateCard(name, currentCard);
  }

  render() {
    const { currentCard, editMode, title } = this.state;

    return (
      <div>
        <div className="header">
          <h1 className="title">{title}</h1>
          <Button type="primary" name="Create New Card" event={this.handleOnCreate} />
        </div>
        <Card
          editMode={editMode}
          card={currentCard}
          handleOnChange={this.handleOnChange}
          handleOnEditSubmit={this.handleOnEditSubmit}
        />
        <div className="button-container">
          <Button type="alert" name="Delete" event={this.handleOnDelete} />
          <Button type="primary" name="Next" event={this.handleOnNext} />
        </div>
      </div>
    );
  }
}

export default App;
