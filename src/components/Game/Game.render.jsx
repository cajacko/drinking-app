import React, { PureComponent } from 'react';
import { Container, Div, Text, Button } from 'components/Game/Game.style';

class Game extends PureComponent {
  render() {
    if (this.props.game) {
      return (
        <div>
          <button onClick={this.props.stop}>Stop</button>

          <div>
            <p>{this.props.game}</p>
            <button onClick={this.props.next}>Next</button>
          </div>
        </div>
      );
    }

    if (this.props.fetchStatus === 'REQUESTED') {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    }

    return (
      <div>
        <h1>Error oh no</h1>
      </div>
    );
  }
}

export default Game;
