import React, { PureComponent } from 'react';
import {
  Container,
  Header,
  Example,
  NewGame,
  List,
  Game,
  GameText,
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
          <Button onClick={this.props.back}>Back</Button>
        </Nav>
        <Header>
          <NewGameContainer>
            <Heading>Add new Game</Heading>
            <Example>
              <Text>You can a users name in the following way:</Text>
              <Text>{text}</Text>
            </Example>
            <NewGameInputs>
              <NewGame
                placeholder="Game text"
                value={this.props.addGameValue}
                onChange={this.props.addGameOnChange}
              />
              <Button onClick={this.props.addGame}>Add Game</Button>
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
                  <GameText
                    value={this.props.updates[i] || game}
                    onChange={event => this.props.changeGameText(event, i)}
                  />
                  <Buttons>
                    <Update>
                      <Button onClick={event => this.props.update(event, i)}>
                        Update
                      </Button>
                    </Update>
                    <Remove>
                      <Button
                        onClick={event => this.props.removeGame(event, i)}
                      >
                        Remove
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
