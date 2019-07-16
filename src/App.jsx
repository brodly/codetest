import React, { Component } from 'react';
import routes from './routes';
import { Card, Button } from './components';
import '../public/styles.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      currentCard: 0,
    };

    this.fetchCard = this.fetchCard.bind(this);
    this.fetchCards = this.fetchCards.bind(this);
    this.handleOnNext = this.handleOnNext.bind(this);
    this.handleOnDelete = this.handleOnDelete.bind(this);
    this.handleOnUpdate = this.handleOnUpdate.bind(this);
    this.handleOnCreate = this.handleOnCreate.bind(this);
  }

  componentDidMount() {
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
    try {
      const cards = await routes.fetchCards();
      this.setState({ cards });
    } catch (err) {
      console.log(err);
    }
  }

  handleOnNext() {
    const { cards } = this.state;
    let { currentCard } = this.state;

    if (currentCard === cards.length - 1) currentCard = 0;
    else currentCard += 1;

    this.setState({ currentCard });
  }

  handleOnCreate(card) {
    routes.createCard(card);
  }

  handleOnUpdate() {

  }

  handleOnDelete() {

  }

  render() {
    const { cards, currentCard } = this.state;

    return (
      <div>
        <div className="header">
          <h1 className="title">Crypto Facts</h1>
          <Button type="primary" name="Create New Card" event={this.handleOnCreate} />
        </div>
        <Card card={cards[currentCard]} />
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
