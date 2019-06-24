import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Image.shadow.css';
import Type from 'prop-types';

class Image extends Component {
  static propTypes = {
    src: Type.string.isRequired,
    alt: Type.string.isRequired,
    width: Type.number,
    height: Type.number,
    cover: Type.bool,
  };

  render() {
    const { cover, ...props } = this.props;

    return styled(styles)(<img {...props} use:cover={cover} />);
  }
}

export default Image;
