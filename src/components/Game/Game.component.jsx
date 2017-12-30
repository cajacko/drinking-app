import React, { PureComponent } from 'react';
import shuffle from 'shuffle-array';
import Game from 'components/Game/Game.render';

class GameComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
    this.edit = this.edit.bind(this);

    this.state = this.getRandomGame(props);
  }

  getRandomGame({ games, names }) {
    if (!games || !names || names.length < 1 || games.length < 1) {
      return null;
    }

    let game;

    const locationsTried = [];
    let gameIndex = null;

    const setGameIndex = (gamesToTry, gameId) => (gameText, i) => {
      if (gameText === gamesToTry[gameId]) gameIndex = i;
    };

    while (!game && locationsTried.length < games.length) {
      const gamesToTry = games.filter((text, gameId) => !locationsTried.includes(gameId));
      const gameId = Math.floor(Math.random() * gamesToTry.length);
      game = this.setGameText(names, gamesToTry[gameId]);

      this.props.games.forEach(setGameIndex(gamesToTry, gameId));

      locationsTried.push(gameId);
    }

    return { game, gameIndex };
  }

  getNamePlaceholders(game) {
    const re = /\{(.*?)\}/g;
    const namePlaceholders = game.match(re) || [];

    return namePlaceholders.filter((elem, index, self) => index === self.indexOf(elem));
  }

  setGameText(names, game) {
    const shuffledNames = names.slice();
    shuffle(shuffledNames);

    const namePlaceholders = this.getNamePlaceholders(game);

    if (!namePlaceholders || namePlaceholders.length === 0) return game;
    if (namePlaceholders.length > shuffledNames.length) return null;

    let gameText = game;

    namePlaceholders.forEach((namePlaceholder, i) => {
      const regex = new RegExp(namePlaceholder, 'g');
      gameText = gameText.replace(regex, shuffledNames[i]);
    });

    return gameText;
  }

  next(event) {
    event.preventDefault();

    this.setState(this.getRandomGame(this.props));
  }

  edit(event) {
    event.preventDefault();

    this.props.showGamesList(this.state.gameIndex);
  }

  render() {
    return (
      <Game
        next={this.next}
        stop={this.props.stop}
        game={this.state.game}
        fetchStatus={this.props.fetchStatus}
        edit={this.edit}
      />
    );
  }
}

export default GameComponent;
