import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Icon.shadow.css';
import Type from 'prop-types';

class Icon extends Component {
  static propTypes = {
    isAwesome: Type.bool,
    awesomeClass: Type.string,
    size: Type.number,
    color: Type.string,
  };

  static defaultProps = {
    isAwesome: false,
    awesomeClass: '',
    size: 12,
  };

  render() {
    const { color, size, isAwesome, awesomeClass, className, ...props } = this.props;

    return styled(styles)(
      isAwesome && (
        <i use:color={color} style={{ fontSize: size }} className={`${className} ${awesomeClass}`} {...props} />
      ),
    );
  }
}

export default Icon;
