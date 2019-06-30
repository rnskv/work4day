import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Image.shadow.css';
import Type from 'prop-types';

class Image extends Component {
  static propTypes = {
    src: Type.string.isRequired,
    alt: Type.string.isRequired,
    width: Type.oneOfType([Type.number, Type.oneOf(['auto'])]),
    height: Type.oneOfType([Type.number, Type.oneOf(['auto'])]),
    cover: Type.bool,
    onError: Type.func,
  };

  static defaultProps = {
    onError: () => {},
  };

  constructor() {
    super();
    this.root = null;
  }

  render() {
    const { onError, cover, ...props } = this.props;

    return styled(styles)(<img ref={root => (this.root = root)} {...props} use:cover={cover} onError={onError} />);
  }
}

export default Image;
