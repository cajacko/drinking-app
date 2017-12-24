import React, { PureComponent } from 'react';
import {
  Container,
  Heading,
  Text,
  Stop,
  Background,
} from 'components/Game/Game.style';
import Button from 'components/Button';

class Game extends PureComponent {
  render() {
    if (this.props.game) {
      return (
        <Container>
          <Stop onClick={this.props.stop}>Stop</Stop>

          <Background>
            <Text>{this.props.game}</Text>
            <Button onClick={this.props.next}>Next</Button>
          </Background>
        </Container>
      );
    }

    if (this.props.fetchStatus === 'REQUESTED') {
      return (
        <Container>
          <Heading>Loading</Heading>
        </Container>
      );
    }

    return (
      <Container>
        <Heading>Error oh no</Heading>
      </Container>
    );
  }
}

export default Game;
