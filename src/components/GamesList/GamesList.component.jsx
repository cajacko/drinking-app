import React, { PureComponent } from 'react';
import GamesList from 'components/GamesList/GamesList.render';

class GamesListComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.addGame = this.addGame.bind(this);
    this.removeGame = this.removeGame.bind(this);
    this.addGameOnChange = this.addGameOnChange.bind(this);

    this.state = { addGameValue: '' };
  }

  addGame(event) {
    event.preventDefault();
    const games = this.props.games.slice();

    games.unshift(this.state.addGameValue);

    this.props.setGames(games);
  }

  removeGame(event, game) {
    event.preventDefault();
    const games = this.props.games.slice();

    games.splice(game, 1);

    this.props.setGames(games);
  }

  addGameOnChange(event) {
    event.preventDefault();

    this.setState({ addGameValue: event.target.value });
  }

  render() {
    return (
      <GamesList
        back={this.props.back}
        addGameValue={this.state.addGameValue}
        games={this.props.games}
        addGame={this.addGame}
        removeGame={this.removeGame}
        toggleAddGameModal={this.toggleAddGameModal}
        addGameOnChange={this.addGameOnChange}
      />
    );
  }
}

export default GamesListComponent;
