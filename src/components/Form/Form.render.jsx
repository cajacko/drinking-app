import React, { PureComponent } from 'react';
import {
  Container,
  InnerContainer,
  List,
  ListItem,
  Name,
  Input,
  InputContainer,
  GameList,
} from 'components/Form/Form.style';
import Button from 'components/Button';

class Form extends PureComponent {
  render() {
    return (
      <Container>
        <InnerContainer>
          {this.props.names && (
            <List>
              {this.props.names.map(name => (
                <ListItem key={name}>
                  <Name>{name}</Name>
                  <Button onClick={event => this.props.delete(event, name)}>
                    Delete
                  </Button>
                </ListItem>
              ))}
            </List>
          )}

          <InputContainer onSubmit={this.props.add}>
            <Input
              type="text"
              onChange={this.props.onChange}
              value={this.props.value}
              innerRef={this.props.setInputRef}
              placeholder="Enter a players name"
            />

            <Button onClick={this.props.add} type="submit">
              Add
            </Button>
          </InputContainer>
          <Button onClick={this.props.start}>Start</Button>
          <GameList>
            <Button onClick={this.props.goToGames}>Games list</Button>
          </GameList>
        </InnerContainer>
      </Container>
    );
  }
}

export default Form;
