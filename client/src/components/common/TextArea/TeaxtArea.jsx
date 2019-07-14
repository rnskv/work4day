import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './TextArea.shadow.css';
import Type from 'prop-types';

class TextArea extends Component {
  constructor(props, context) {
    super(props, context);
    this.root = null;
  }

  render() {
    const { className, children, ...props } = this.props;

    return styled(styles)(<textarea defaultValue={children} className={className} />);
  }

  static defaultProps = {
    className: '',
  };

  static propTypes = {
    className: Type.string,
  };
}

export default TextArea;
