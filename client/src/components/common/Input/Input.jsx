import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Input.shadow.css';
import Type from 'prop-types';

import Image from '../Image/index';

class Input extends Component {
  static propTypes = {
    size: Type.oneOf(['s', 'm', 'l', 'xl']).isRequired,
    className: Type.string,
    icon: Type.any,
    onChange: Type.func,
  };

  static defaultProps = {
    onChange: () => {},
  };

  constructor(props, context) {
    super(props, context);
    this.root = null;
  }

  render() {
    const { onChange, size, icon, children, ...props } = this.props;

    return styled(styles)(
      <content {...props} use:size={size}>
        <input
          ref={root => {
            this.root = root;
          }}
          onChange={onChange}
        />
        {icon}
      </content>,
    );
  }
}

export default Input;
