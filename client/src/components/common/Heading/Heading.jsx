import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Heading.shadow.css';
import Type from 'prop-types';

class Heading extends Component {
  static propTypes = {
    id: Type.number,
    size: Type.oneOf(['xs', 's', 'm', 'l', 'xl']).isRequired,
    color: Type.oneOf(['white', 'black']).isRequired,
    hasMargin: Type.bool,
  };

  static defaultProps = {
    hasMargin: true,
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
      className,
      key: level,
    };

    return styled(styles)(
      <content>
        {level === 1 && (
          <h1 {...headingProps} use:color={color} use:size={size} use:hasMargin={String(hasMargin)}>
            {' '}
            {children}{' '}
          </h1>
        )}
        {level === 2 && (
          <h2 {...headingProps} use:color={color} use:size={size} use:hasMargin={String(hasMargin)}>
            {' '}
            {children}{' '}
          </h2>
        )}
        {level === 3 && (
          <h3 {...headingProps} use:color={color} use:size={size} use:hasMargin={String(hasMargin)}>
            {' '}
            {children}{' '}
          </h3>
        )}
        {level === 4 && (
          <h4 {...headingProps} use:color={color} use:size={size} use:hasMargin={String(hasMargin)}>
            {' '}
            {children}{' '}
          </h4>
        )}
        {level === 5 && (
          <h5 {...headingProps} use:color={color} use:size={size} use:hasMargin={String(hasMargin)}>
            {' '}
            {children}{' '}
          </h5>
        )}
      </content>,
    );
  }
}

export default Heading;
