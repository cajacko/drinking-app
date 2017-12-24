import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Div, Text, Button } from 'components/NameInput/NameInput.style';

/**
 * Presentation for the NameInput component.
 *
 * This class is only concerned with the visual presentation of the component.
 * All logic is confined to if/else, switch and looping over arrays. Any logic,
 * state and actions needed must be handled by the .component file or
 * .container for dispatching actions.
 *
 * TODO: EXPLAIN CUSTOM BEHAVIOUR HERE
 *
 * @extends PureComponent
 */
class NameInput extends PureComponent {
  /**
   * Render the component
   *
   * @return {String} The html markup to render
   */
  render() {
    return (
      <Container>
        <Div prop1={this.props.prop1}>
          {this.props.prop2 && <Text>Hello</Text>}
          <Button onChange={this.props.onChange}>{this.props.value}</Button>
        </Div>
      </Container>
    );
  }
}

NameInput.propTypes = {
  // prop1: PropTypes.string.isRequired,
  prop2: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

// TODO: Delete as necessary
NameInput.defaultProps = {
  prop2: false,
};

export default NameInput;
