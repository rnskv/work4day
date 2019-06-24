import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Select.shadow.css';
import Type from 'prop-types';

import Icon from '../Icon/index';

class Select extends Component {
  static propTypes = {
    id: Type.oneOfType([Type.string, Type.number]).isRequired,
    value: Type.oneOfType([Type.string, Type.number]),
    options: Type.array,
    text: Type.oneOfType([Type.string, Type.number]),
    defaultOption: Type.object,
    onChange: Type.func,
  };

  constructor(props) {
    super();
    this.state = {
      value: props.value || '',
      text: props.text || '',
      opened: false,
    };
    this.root = null;
  }

  componentWillMount() {
    if (!this.props.text) {
      this.setDefaultValue();
    }
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
    const option = this.props.options.filter(option => option.value === this.props.value)[0];
    this.selectOption(option);
  }

  selectOption(option, callback) {
    this.setState(
      {
        text: option.text,
        value: option.value,
      },
      callback,
    );
  }

  handleValueChange = () => {
    this.props.onChange(this.getValue());
  };

  handleOptionClick = option => () => {
    this.selectOption(option, () => {
      this.handleValueChange();
      this.collapse();
    });
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

  render() {
    const { size, className } = this.props;

    return styled(styles)(
      <content
        role="select"
        className={className}
        use:size={size}
        ref={root => {
          this.root = root;
        }}
        tabIndex={0}
        onBlur={this.collapse}
        onFocus={this.expand}
      >
        <input value={this.state.value} id={this.props.id} type="hidden" />
        <button aria-haspopup="true" aria-expanded={this.state.opened} tabIndex={-1}>
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
      </content>,
    );
  }
}

export default Select;
