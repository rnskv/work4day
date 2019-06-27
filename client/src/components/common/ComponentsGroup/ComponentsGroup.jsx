import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './ComponentsGroup.shadow.css';
import Type from 'prop-types';

class ComponentsGroup extends Component {
  static propTypes = {
    className: Type.any,
    children: Type.any.isRequired,
    type: Type.string.isRequired,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { className, children, type } = this.props;

    return styled(styles)(
      <content type={type} className={className}>
        {children}
      </content>,
    );
  }
}

export default ComponentsGroup;
