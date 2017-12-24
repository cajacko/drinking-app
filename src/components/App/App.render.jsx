import React, { PureComponent } from 'react';
import { Container } from 'components/App/App.style';
import Form from 'components/Form';
import Game from 'components/Game';

class App extends PureComponent {
  render() {
    return <Container>{this.props.started ? <Game /> : <Form />}</Container>;
  }
}

export default App;
