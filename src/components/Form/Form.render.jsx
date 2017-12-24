import React, { PureComponent } from 'react';
import { Container, InnerContainer } from 'components/Form/Form.style';
import Button from 'components/Button';

class Form extends PureComponent {
  render() {
    return (
      <Container>
        <InnerContainer onSubmit={this.props.add}>
          {this.props.names && (
            <ul>
              {this.props.names.map(name => (
                <li key={name}>
                  <span>{name}</span>
                  <Button onClick={() => this.props.delete(name)}>
                    Delete
                  </Button>
                </li>
              ))}
            </ul>
          )}

          <input
            type="text"
            onChange={this.props.onChange}
            value={this.props.value}
          />

          <Button onClick={this.props.add} type="submit">
            Add
          </Button>
          <Button onClick={this.props.start}>Start</Button>
        </InnerContainer>
      </Container>
    );
  }
}

export default Form;
