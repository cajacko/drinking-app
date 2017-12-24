import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Div, Text, Button } from 'components/Game/Game.style';

/**
 * Presentation for the Game component.
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
class Game extends PureComponent {
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

Game.propTypes = {
  // prop1: PropTypes.string.isRequired,
  prop2: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

// TODO: Delete as necessary
Game.defaultProps = {
  prop2: false,
};

export default Game;
