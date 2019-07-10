import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Heading.shadow.css';
import Type from 'prop-types';

class Heading extends Component {
  static propTypes = {
    id: Type.number,
    size: Type.oneOf(['xs', 's', 'm', 'l', 'xl']),
    color: Type.oneOf(['white', 'black']),
  };

  static defaultProps = {
    color: 'black',
    size: 'm',
  };

  render() {
    const { id, className, color, size, children, hasMargin } = this.props;

    const HEADING_LEVELS = {
      xs: 5,
      s: 4,
      m: 3,
      l: 2,
      xl: 1,
    };

    const level = HEADING_LEVELS[size];

    const headingProps = {
      id,
      key: level,
    };

    return styled(styles)(
      <content className={className}>
        {level === 1 && (
          <h1 {...headingProps} use:color={color} use:size={size}>
            {children}
          </h1>
        )}
        {level === 2 && (
          <h2 {...headingProps} use:color={color} use:size={size}>
            {children}
          </h2>
        )}
        {level === 3 && (
          <h3 {...headingProps} use:color={color} use:size={size}>
            {children}
          </h3>
        )}
        {level === 4 && (
          <h4 {...headingProps} use:color={color} use:size={size}>
            {children}
          </h4>
        )}
        {level === 5 && (
          <h5 {...headingProps} use:color={color} use:size={size}>
            {children}
          </h5>
        )}
      </content>,
    );
  }
}

export default Heading;
