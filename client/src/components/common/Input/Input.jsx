import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Input.shadow.css';
import Type from 'prop-types';
import validator from 'src/modules/validator';

import ComponentsGroup from 'src/components/common/ComponentsGroup';
import ErrorsList from './ErrorsList.jsx';

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
      errors: [],
    };
  }

  runValidator(value, validations) {
    const { isValid, errors } = validator.validate(value, validations);

    console.log(isValid, errors);
    this.setState({
      isValid,
      errors,
    });
  }

  handleChange = e => {
    const { onChange } = this.props;
    this.runValidator(e.target.value, ['required', 'email']);
    onChange(e);
  };

  render() {
    const { onChange, size, icon, children, ...props } = this.props;
    const { isValid, errors } = this.state;

    return styled(styles)(
      <content {...props} use:size={size} use:isValid={isValid ? 'true' : 'false'}>
        <ComponentsGroup type="inputView">
          <input
            ref={root => {
              this.root = root;
            }}
            use:isValid={isValid ? 'true' : 'false'}
            onChange={this.handleChange}
          />
          {icon}
        </ComponentsGroup>
        <ErrorsList errors={errors} />
      </content>,
    );
  }
}

export default Input;
