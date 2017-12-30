import React, { PureComponent } from 'react';
// import {} from 'components/GamesList/GamesList.style';
import Button from 'components/Button';

class GamesList extends PureComponent {
  render() {
    return (
      <div>
        <header>
          <Button onClick={this.props.back}>Back</Button>
          <textarea
            placeholder="Game text"
            value={this.props.addGameValue}
            onChange={this.props.addGameOnChange}
          />
          <Button onClick={this.props.addGame}>Add Game</Button>
        </header>
        {!!this.props.games.length && (
          <ul>
            {this.props.games.map((game, i) => (
              <li key={game}>
                <span>{game}</span>
                <Button onClick={event => this.props.removeGame(event, i)}>
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default GamesList;
