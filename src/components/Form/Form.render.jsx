import React, { PureComponent } from 'react';
import { Container, InnerContainer } from 'components/Form/Form.style';

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
                  <button onClick={() => this.props.delete(name)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}

          <input
            type="text"
            onChange={this.props.onChange}
            value={this.props.value}
          />

          <button onClick={this.props.add} type="submit">
            Add
          </button>
          <button onClick={this.props.start}>Start</button>
        </InnerContainer>
      </Container>
    );
  }
}

export default Form;
