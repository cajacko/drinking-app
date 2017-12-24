import React, { PureComponent } from 'react';
import shuffle from 'shuffle-array';
import Game from 'components/Game/Game.render';

class GameComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.next = this.next.bind(this);

    this.state = { game: this.getRandomGame(props) };
  }

  getRandomGame({ games, names }) {
    if (!games || !names || names.length < 1 || games.length < 1) {
      return null;
    }

    let game;

    const locationsTried = [];

    while (!game && locationsTried.length < games.length) {
      const gamesToTry = games.filter((text, gameId) => !locationsTried.includes(gameId));
      const gameId = Math.floor(Math.random() * gamesToTry.length);
      game = this.setGameText(names, gamesToTry[gameId]);
      locationsTried.push(gameId);
    }

    return game;
  }

  getNamePlaceholders(game) {
    const re = /\{(.*?)\}/g;
    return game.match(re) || [];
  }

  setGameText(names, game) {
    const shuffledNames = names.slice();
    shuffle(shuffledNames);

    const namePlaceholders = this.getNamePlaceholders(game);

    if (!namePlaceholders || namePlaceholders.length === 0) return game;
    if (namePlaceholders.length > shuffledNames.length) return null;

    let gameText = game;

    namePlaceholders.forEach((namePlaceholder, i) => {
      gameText = gameText.replace(namePlaceholder, shuffledNames[i]);
    });

    return gameText;
  }

  next(event) {
    event.preventDefault();

    this.setState({ game: this.getRandomGame(this.props) });
  }

  render() {
    return (
      <Game
        next={this.next}
        stop={this.props.stop}
        game={this.state.game}
        fetchStatus={this.props.fetchStatus}
      />
    );
  }
}

export default GameComponent;
