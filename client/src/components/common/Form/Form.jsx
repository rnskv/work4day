import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Form.shadow.css';
import Type from 'prop-types';
import FormContext from 'src/components/contexts/FormContext';
class Button extends Component {
  static defaultProps = {};

  static propTypes = {};

  constructor(props, context) {
    super(props, context);
    this.root = null;
    this.validatedComponent = [];
    this.getNode = this.getNode.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.root.checkValidity();
    const { onSubmit, children } = this.props;

    if (this.deepValidation()) {
      if (onSubmit) {
        onSubmit(e);
      }
    }
  };

  registerValidatedComponent = component => {
    this.validatedComponent.push(component);
  };

  deepValidation = () => {
    let isValid = true;
    this.validatedComponent.forEach(component => {
      if (component.runValidator) {
        const result = component.runValidator(component.value, component.props.validations);
        isValid = isValid && result;
      }
    });
    return isValid;
  };

  getNode() {
    return this.root;
  }

  render() {
    const { className, children, ...props } = this.props;
    const formProps = {
      className,
      onSubmit: this.handleSubmit,
      ref: root => (this.root = root),
    };
    return styled(styles)(
      <FormContext.Provider value={{ attachToForm: this.registerValidatedComponent }}>
        <form {...formProps}> {children} </form>
      </FormContext.Provider>,
    );
  }
}

export default Button;
