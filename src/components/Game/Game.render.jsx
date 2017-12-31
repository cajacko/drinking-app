import React, { PureComponent } from 'react';
import Icon from 'components/Icon';
import {
  Container,
  Heading,
  Text,
  Stop,
  Background,
  Edit,
  Footer,
  Next,
} from 'components/Game/Game.style';

class Game extends PureComponent {
  render() {
    if (this.props.game) {
      return (
        <Container colour={this.props.colour}>
          <Stop onClick={this.props.stop}>
            <Icon icon="hand-paper-o" colour="WHITE" />
          </Stop>
          <Edit onClick={this.props.edit}>
            <Icon icon="edit" colour="WHITE" />
          </Edit>

          <Background onClick={this.props.next}>
            <Text>{this.props.game}</Text>
          </Background>

          <Footer>
            <Next onClick={this.props.next}>
              <Icon icon="forward" colour="WHITE" />
            </Next>
          </Footer>
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
        <Heading>Hit an error, try refreshing</Heading>
      </Container>
    );
  }
}

export default Game;
