import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Button.shadow.css';
import Type from 'prop-types';
import Loader from '../Loader';

class Button extends Component {
  static propTypes = {
    color: Type.oneOf(['white', 'blue', 'red']),
    size: Type.oneOf(['s', 'm', 'l', 'auto']),
    style: Type.oneOf(['link', 'default']),
    className: Type.string,
    type: Type.oneOf(['button', 'submit', 'reset']),
    isLoading: Type.bool,
    disabled: Type.bool,
    interactive: Type.bool,
    visible: Type.bool,
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
    visible: true,
    isLoading: false,
    interactive: true,
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
    const { style, color, size, className, visible, isLoading, interactive, disabled, children, ...props } = this.props;
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
      visible ? (
        <button
          use:disabled={disabled}
          use:interactive={interactive}
          use:color={color}
          use:size={size}
          use:style={style}
          {...buttonProps}>
          {isLoading ? <Loader isLoading={isLoading} /> : <span>{children}</span>}
        </button>
      ) : null,
    );
  }
}

export default Button;
