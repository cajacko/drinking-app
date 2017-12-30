import React, { PureComponent } from 'react';
import { Container, Scroll } from 'components/App/App.style';
import Form from 'components/Form';
import Game from 'components/Game';
import GamesList from 'components/GamesList';

class App extends PureComponent {
  componentDidMount() {
    this.props.getGames();
  }

  render() {
    let Content;

    if (this.props.showGamesList) {
      Content = <GamesList />;
    } else if (this.props.started) {
      Content = <Game />;
    } else {
      Content = <Form />;
    }

    return (
      <Container>
        <Scroll>{Content}</Scroll>
      </Container>
    );
  }
}

export default App;
