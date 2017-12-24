import React, { PureComponent } from 'react';
import { Container, Scroll } from 'components/App/App.style';
import Form from 'components/Form';
import Game from 'components/Game';

class App extends PureComponent {
  componentDidMount() {
    this.props.getGames();
  }

  render() {
    return (
      <Container>
        <Scroll>{this.props.started ? <Game /> : <Form />}</Scroll>
      </Container>
    );
  }
}

export default App;
