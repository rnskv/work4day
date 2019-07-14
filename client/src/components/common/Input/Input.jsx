import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Input.shadow.css';
import Type from 'prop-types';
import validator from 'src/modules/validator';

import ComponentsGroup from 'src/components/common/ComponentsGroup';
import ErrorsList from 'src/components/common/ErrorsList';
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
    placeholder: Type.oneOfType([Type.string, Type.number]),
  };

  static defaultProps = {
    onChange: () => {},
    validations: [],
    value: '',
    placeholder: '',
  };

  constructor(props, context) {
    super(props, context);
    this.root = React.createRef();
    this.state = {
      isValid: true,
      errors: [],
      value: props.value || '',
    };
  }

  componentDidMount() {
    if (this.context.attachToForm) {
      this.context.attachToForm(this);
    }
  }

  runValidator(value, validations) {
    const { isValid, errors } = validator.validate(value, validations);

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

  get value() {
    return this.state.value;
  }

  render() {
    const { placeholder, onChange, size, icon, children, ...props } = this.props;
    const { isValid, errors, value } = this.state;
    return styled(styles)(
      <content {...props} use:size={size} use:isValid={isValid ? 'true' : 'false'}>
        <ComponentsGroup type="inputView">
          <input
            ref={this.root}
            use:isValid={isValid ? 'true' : 'false'}
            onChange={this.handleChange}
            value={value}
            placeholder={placeholder}
          />
          {icon}
        </ComponentsGroup>
        <ErrorsList errors={errors} />
      </content>,
    );
  }
}
export default Input;
