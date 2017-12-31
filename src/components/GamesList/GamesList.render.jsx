import React, { PureComponent } from 'react';
import Icon from 'components/Icon';
import Textarea from 'react-textarea-autosize';
import {
  Container,
  Header,
  Example,
  newGame,
  List,
  Game,
  gameText,
  Update,
  Remove,
  Buttons,
  NewGameContainer,
  NewGameInputs,
  Heading,
  Content,
  Text,
  Nav,
  ScrollTo,
} from 'components/GamesList/GamesList.style';
import Button from 'components/Button';

class GamesList extends PureComponent {
  componentDidMount() {
    if (typeof this.props.scrollTo === 'number') {
      document.getElementById(`game-${this.props.scrollTo}`).scrollIntoView();
    }
  }

  render() {
    const text = '{player1} can give {player2} any number of fingers.';
    return (
      <Container>
        <Nav>
          <Button onClick={this.props.back}>
            <Icon icon="chevron-left" colour="WHITE" />
          </Button>
        </Nav>
        <Header>
          <NewGameContainer>
            <Heading>Add new Game</Heading>
            <Example>
              <Text>You can a users name in the following way:</Text>
              <Text>{text}</Text>
            </Example>
            <NewGameInputs>
              <Textarea
                style={newGame}
                placeholder="Click here to add game text"
                value={this.props.addGameValue}
                onChange={this.props.addGameOnChange}
              />
              <Button onClick={this.props.addGame}>
                <Icon icon="plus" colour="WHITE" />
              </Button>
            </NewGameInputs>
          </NewGameContainer>
        </Header>
        {!!this.props.games.length && (
          <Content>
            <Heading>Games</Heading>
            <List>
              {this.props.games.map((game, i) => (
                <Game key={game}>
                  <ScrollTo id={`game-${i}`} />
                  <Textarea
                    value={this.props.updates[i] || game}
                    onChange={event => this.props.changeGameText(event, i)}
                    style={gameText}
                  />
                  <Buttons>
                    <Update>
                      <Button onClick={event => this.props.update(event, i)}>
                        <Icon icon="save" colour="WHITE" />
                      </Button>
                    </Update>
                    <Remove>
                      <Button
                        theme="GREY"
                        onClick={event => this.props.removeGame(event, i)}
                      >
                        <Icon icon="trash" colour="WHITE" />
                      </Button>
                    </Remove>
                  </Buttons>
                </Game>
              ))}
            </List>
          </Content>
        )}
      </Container>
    );
  }
}

export default GamesList;
