import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Input.shadow.css';
import Type from 'prop-types';
import validator from 'src/modules/validator';

import ComponentsGroup from 'src/components/common/ComponentsGroup';
import ErrorsList from './ErrorsList.jsx';
import FormContext from 'src/components/contexts/FormContext';

class Input extends Component {
  static contextType = FormContext;

  static propTypes = {
    size: Type.oneOf(['s', 'm', 'l', 'xl']).isRequired,
    className: Type.string,
    icon: Type.any,
    onChange: Type.func,
    validations: Type.array,
    value: Type.oneOfType([Type.string, Type.number]),
  };

  static defaultProps = {
    onChange: () => {},
    validations: [],
    value: '',
  };

  constructor(props, context) {
    super(props, context);
    this.root = null;
    this.state = {
      isValid: true,
      errors: [],
      value: props.value || '',
    };
    console.log(context);
  }

  componentDidMount() {
    if (this.context.attachToForm) {
      this.context.attachToForm(this);
    }
  }

  runValidator(value, validations) {
    const { isValid, errors } = validator.validate(value, validations);

    console.log(isValid, errors);

    this.setState({
      isValid,
      errors,
    });

    return isValid;
  }

  handleChange = e => {
    const { onChange, validations } = this.props;

    this.setState({
      value: e.target.value,
    });

    this.runValidator(e.target.value, validations);
    onChange(e);
  };

  render() {
    const { onChange, size, icon, children, ...props } = this.props;
    const { isValid, errors, value } = this.state;
    return styled(styles)(
      <content {...props} use:size={size} use:isValid={isValid ? 'true' : 'false'}>
        <ComponentsGroup type="inputView">
          <input
            ref={root => {
              this.root = root;
            }}
            use:isValid={isValid ? 'true' : 'false'}
            onChange={this.handleChange}
            value={value}
          />
          {icon}
        </ComponentsGroup>
        <ErrorsList errors={errors} />
      </content>,
    );
  }
}
export default Input;
