import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Description.shadow.css';
import Type from 'prop-types';

class Descriprion extends Component {
  static propTypes = {
    id: Type.number,
    size: Type.oneOf(['xs', 's', 'm', 'l', 'xl']),
    color: Type.oneOf(['white', 'black', 'grey']),
  };

  static defaultProps = {
    size: 'm',
    color: 'black',
  };

  render() {
    const { id, className, color, size, children } = this.props;

    return styled(styles)(
      <span className={className} use:color={color} use:size={size}>
        {children}
      </span>,
    );
  }
}

export default Descriprion;
