import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Input.shadow.css';
import Type from 'prop-types';
import validator from 'src/modules/validator';

import ComponentsGroup from 'src/components/common/ComponentsGroup';

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
    this.state = {
      isValid: true,
    };
  }

  runValidator(value, validations) {
    const isValid = validator.validate(value, validations);
    this.setState({
      isValid: !isValid,
    });
    console.log('input is valid:', isValid);
  }

  handleChange = e => {
    const { onChange } = this.props;
    this.runValidator(e.target.value, ['required']);
    onChange(e);
  };

  render() {
    const { onChange, size, icon, children, ...props } = this.props;
    const { isValid } = this.state;

    return styled(styles)(
      <content {...props} use:size={size} use:isInvalid={!isValid}>
        <ComponentsGroup type="inputView">
          <input
            ref={root => {
              this.root = root;
            }}
            onChange={this.handleChange}
          />
          {icon}
        </ComponentsGroup>
        <div>Валидация - true</div>
      </content>,
    );
  }
}

export default Input;
