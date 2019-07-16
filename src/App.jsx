/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import routes from './routes';
import { Card, Button } from './components';
import '../public/styles.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      currentCardIndex: 0,
      currentCard: {
        name: '',
        desc: '',
        fact: '',
        img_url: '',
      },
    };

    this.fetchCard = this.fetchCard.bind(this);
    this.fetchCards = this.fetchCards.bind(this);
    this.handleOnNext = this.handleOnNext.bind(this);
    this.handleOnDelete = this.handleOnDelete.bind(this);
    this.handleOnUpdate = this.handleOnUpdate.bind(this);
    this.handleOnCreate = this.handleOnCreate.bind(this);

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
      this.setState({ cards, currentCard: cards[currentCardIndex] });
    } catch (err) {
      console.log(err);
    }
  }

  handleOnNext() {
    const { cards } = this.state;
    let { currentCard, currentCardIndex } = this.state;

    if (currentCardIndex === cards.length - 1) currentCardIndex = 0;
    else currentCardIndex += 1;

    currentCard = cards[currentCardIndex];

    this.setState({ currentCard, currentCardIndex });
  }

  handleOnCreate(card) {
    routes.createCard(card);
  }

  handleOnUpdate() {

  }

  handleOnDelete() {
    let { cards, currentCardIndex, currentCard } = this.state;

    // eslint-disable-next-line no-alert
    const del = confirm('Are you sure you want to delete this card?');

    if (del) {
      cards = cards.filter(item => item.name !== currentCard.name);

      if (currentCardIndex > 0) currentCardIndex -= 1;

      currentCard = cards[currentCardIndex];
      // routes.deleteCard(name);
      this.setState({ cards, currentCard, currentCardIndex });
    }
  }

  render() {
    const { currentCard } = this.state;

    return (
      <div>
        <div className="header">
          <h1 className="title">Crypto Facts</h1>
          <Button type="primary" name="Create New Card" event={this.handleOnCreate} />
        </div>
        <Card card={currentCard} />
        <div className="button-container">
          <Button type="alert" name="Delete" event={this.handleOnDelete} />
          <Button type="secondary" name="Edit" event={this.handleOnUpdate} />
          <Button type="primary" name="Next" event={this.handleOnNext} />
        </div>
      </div>
    );
  }
}

export default App;
