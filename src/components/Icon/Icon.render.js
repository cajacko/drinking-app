import React, { PureComponent } from 'react';
import { Icon as FontAwesomeIcon } from 'react-fa';
import { BLACK } from 'cj-pattern-library/lib/constants/colours';
import Span from 'components/Icon/Icon.style';

class Icon extends PureComponent {
  render() {
    return (
      <Span fontSize={this.props.size} colour={this.props.colour}>
        <FontAwesomeIcon name={this.props.icon} spin={this.props.spin} />
      </Span>
    );
  }
}

Icon.defaultProps = {
  size: 20,
  colour: BLACK,
  spin: false,
};

export default Icon;
