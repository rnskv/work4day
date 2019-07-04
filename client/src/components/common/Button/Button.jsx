import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Button.shadow.css';
import Type from 'prop-types';

class Button extends Component {
  static propTypes = {
    color: Type.oneOf(['white', 'blue']),
    size: Type.oneOf(['s', 'm', 'l', 'auto']),
    style: Type.oneOf(['link', 'default']),
    className: Type.string,
    type: Type.oneOf(['button', 'submit', 'reset']),
    onClick: Type.func,
    onMouseDown: Type.func,
    onMouseUp: Type.func,
    onMouseOver: Type.func,
    onMouseOut: Type.func,
    onMouseMove: Type.func,
  };

  static defaultProps = {
    className: '',
    style: 'default',
    color: 'blue',
    size: 's',
    type: 'button',
    onClick: () => {},
    onMouseDown: () => {},
    onMouseUp: () => {},
    onMouseOver: () => {},
    onMouseOut: () => {},
    onMouseMove: () => {},
  };

  constructor(props, context) {
    super(props, context);
    this.root = null;
  }

  handleClick = event => {
    const { onClick } = this.props;
    this.root.blur();
    onClick(event);
  };

  handleMouseDown = () => {
    const { onMouseDown } = this.props;
    onMouseDown();
  };

  handleMouseUp = () => {
    const { onMouseUp } = this.props;
    onMouseUp();
  };

  handleMouseOver = () => {
    const { onMouseOver } = this.props;
    onMouseOver();
  };

  handleMouseOut = () => {
    const { onMouseOut } = this.props;
    onMouseOut();
  };

  handleMouseMove = () => {
    const { onMouseMove } = this.props;
    onMouseMove();
  };

  render() {
    const { style, color, size, className, children, ...props } = this.props;
    const buttonProps = {
      ref: root => {
        this.root = root;
      },
      className,
      ...props,
      onClick: this.handleClick,
      onMouseDown: this.handleMouseDown,
      onMouseUp: this.handleMouseUp,
      onMouseOver: this.handleMouseOver,
      onMouseOut: this.handleMouseOut,
      onMouseMove: this.handleMouseMove,
    };

    return styled(styles)(
      <button use:color={color} use:size={size} use:style={style} {...buttonProps}>
        {children}
      </button>,
    );
  }
}

export default Button;
