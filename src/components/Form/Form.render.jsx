import React, { PureComponent } from 'react';
import Icon from 'components/Icon';
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
                  <Button
                    theme="GREY"
                    onClick={event => this.props.delete(event, name)}
                  >
                    <Icon icon="close" colour="WHITE" />
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
              <Icon icon="plus" colour="WHITE" />
            </Button>
          </InputContainer>
          <Button onClick={this.props.start}>
            <Icon icon="play" colour="WHITE" />
          </Button>
          <GameList>
            <Button onClick={this.props.goToGames}>
              <Icon icon="list" colour="WHITE" />
            </Button>
          </GameList>
        </InnerContainer>
      </Container>
    );
  }
}

export default Form;
