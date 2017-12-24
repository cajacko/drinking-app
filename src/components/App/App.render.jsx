import React, { PureComponent } from 'react';
import { Container } from 'components/App/App.style';
import Form from 'components/Form';
import Game from 'components/Game';

class App extends PureComponent {
  componentDidMount() {
    this.props.getGames();
  }

  render() {
    return <Container>{this.props.started ? <Game /> : <Form />}</Container>;
  }
}

export default App;
