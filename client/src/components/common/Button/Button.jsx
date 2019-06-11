import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Button.shadow.css';
import Type from 'prop-types';

class Button extends Component {
    constructor(props, context) {
        super(props, context);
        this.root = null;
    }

    handleClick = (event) => {
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
        const { color, size, className, children, ...props } = this.props;
        const buttonProps = {
            ref: root => { this.root = root },
            className,
            ...props,
            onClick: this.handleClick,
            onMouseDown: this.handleMouseDown,
            onMouseUp: this.handleMouseUp,
            onMouseOver: this.handleMouseOver,
            onMouseOut: this.handleMouseOut,
            onMouseMove: this.handleMouseMove
        };

        return styled(styles)(
            <button
                use:color={color}
                use:size={size}
                { ...buttonProps }
            >
                { children }
            </button>,
        )
    }

    static defaultProps = {
        className: '',
        onClick: () => {},
        onMouseDown: () => {},
        onMouseUp: () => {},
        onMouseOver: () => {},
        onMouseOut: () => {},
        onMouseMove: () => {},
    };

    static propTypes = {
        color: Type.oneOf(['white', 'blue']).isRequired,
        size: Type.oneOf(['s', 'm', 'l']).isRequired,
        className: Type.string,
        onClick: Type.func,
        onMouseDown: Type.func,
        onMouseUp: Type.func,
        onMouseOver: Type.func,
        onMouseOut: Type.func,
        onMouseMove: Type.func,
    };
}

export default Button;
