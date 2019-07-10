import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Select.shadow.css';
import Type from 'prop-types';
import validator from 'src/modules/validator';
import ErrorsList from 'src/components/common/ErrorsList';

import FormContext from 'src/components/contexts/FormContext';

import Icon from '../Icon/index';

class Select extends Component {
  static contextType = FormContext;

  static propTypes = {
    id: Type.oneOfType([Type.string, Type.number]).isRequired,
    value: Type.oneOfType([Type.string, Type.number]),
    options: Type.array,
    text: Type.oneOfType([Type.string, Type.number]),
    defaultOption: Type.object,
    onChange: Type.func,
    validations: Type.array,
  };

  static defaultProps = {
    value: 0,
    validations: [],
  };

  constructor(props) {
    super();
    this.state = {
      value: props.value || '',
      text: props.text || '',
      opened: false,
      isValid: false,
      errors: [],
    };
    this.root = null;
  }

  componentDidMount() {
    if (this.context.attachToForm) {
      this.context.attachToForm(this);
    }

    if (!this.props.text) {
      this.setDefaultValue();
    }
  }

  runValidator(value, validations) {
    const { isValid, errors } = validator.validate(value, validations);
    console.log('run validator on select');
    this.setState({
      isValid,
      errors,
    });

    return isValid;
  }

  getValue() {
    return this.state.value;
  }

  expand = () => {
    this.setState({
      opened: true,
    });
  };

  collapse = () => {
    this.setState({
      opened: false,
    });
  };

  setDefaultValue() {
    let option = this.props.options.filter(option => option.value === this.props.value)[0];
    if (!option) {
      option = this.props.options[0];
    }
    this.selectOption(option);
  }

  selectOption(option, callback) {
    if (!option) return;
    this.setState(
      {
        text: option.text,
        value: option.value,
      },
      callback,
    );
  }

  handleValueChange = () => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(this.getValue());
    }
  };

  handleOptionClick = option => () => {
    this.selectOption(option, () => {
      this.handleValueChange();
      this.collapse();
    });
  };

  handleButtonClick = e => {
    e.preventDefault();
  };

  renderOptionsList() {
    return this.props.options.map(option => {
      return styled(styles)(
        <li role="option" key={option.value} onClick={this.handleOptionClick(option)}>
          {option.text}
        </li>,
      );
    });
  }

  get value() {
    return this.state.value;
  }

  render() {
    const { size, className } = this.props;
    const { errors } = this.state;

    return styled(styles)(
      <React.Fragment>
        <content
          role="select"
          className={className}
          use:size={size}
          ref={root => {
            this.root = root;
          }}
          tabIndex={0}
          onBlur={this.collapse}
          onFocus={this.expand}>
          <input value={this.state.value} id={this.props.id} type="hidden" />
          <button onClick={this.handleButtonClick} aria-haspopup="true" aria-expanded={this.state.opened} tabIndex={-1}>
            <span>
              <a>{this.state.text}</a>
              {this.state.opened ? (
                <Icon color={'black'} awesomeClass={'fas fa-angle-up'} isAwesome />
              ) : (
                <Icon color={'black'} awesomeClass={'fas fa-angle-down'} isAwesome />
              )}
            </span>
          </button>

          <ul role="listbox">{this.renderOptionsList()}</ul>
        </content>
        <ErrorsList errors={errors} />
      </React.Fragment>,
    );
  }
}

export default Select;
