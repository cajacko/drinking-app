import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Game from 'components/Game/Game.render';

/**
 * Business logic for the Game component.
 *
 * Does not render any markup, as markup is only handled but a .render
 * component. This helps to seperate the presentation logic from managing the
 * state and actions. It also makes it easier to handle component updating and
 * rerendering, improving performance.
 *
 * TODO: EXPLAIN CUSTOM BEHAVIOUR HERE
 *
 * @extends PureComponent
 */
class GameComponent extends PureComponent {
  /**
   * Initialise the class, set the initial state and bind the methods
   *
   * @param  {Object}    props Props passed to the component
   * @return {undefined}       No return value
   */
  constructor(props) {
    super(props);

    // TODO: Delete as necessary
    this.onChange = this.onChange.bind(this);

    // TODO: Delete/adjust necessary
    this.state = { value: '' };
  }

  /**
   * Example method
   *
   * TODO: Delete this method
   *
   * @param  {Event}     event Event from the action
   * @return {undefined}       No return value
   */
  onChange(event) {
    event.preventDefault();

    const value = event.target.value;

    if (value !== this.state.value) this.setState({ value });
    if (this.props.prop3) this.props.prop3(value);
  }

  /**
   * Render the .render component that handles all the visual presentation.
   * Passing only the props needed for display.
   *
   * @return {String} The html markup to render
   */
  render() {
    return (
      <Game
        prop1={this.props.prop1}
        prop2={this.props.prop2}
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  }
}

GameComponent.propTypes = {
  // prop1: PropTypes.string.isRequired,
  prop2: PropTypes.bool,
  prop3: PropTypes.func,
};

// TODO: Delete as necessary
GameComponent.defaultProps = {
  prop2: false,
  prop3: () => {},
};

export default GameComponent;
