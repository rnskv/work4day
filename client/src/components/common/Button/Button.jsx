import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Button.shadow.css';
import Type from 'prop-types';

class Button extends Component {
    static propTypes = {
        color: Type.oneOf(['white', 'blue']).isRequired,
        size: Type.oneOf(['s', 'm', 'l']).isRequired,
        className: Type.string,
        onClick: Type.func
    };

    constructor(props, context) {
        super(props, context);
        this.root = null;
    }

    handleClick = (event) => {
        const { onClick } = this.props;
        this.root.blur();
        onClick && onClick(event);
    };

    render() {
        const {color, size, className, children, ...props} = this.props;
        return styled(styles)(
            <button
                ref={ (root) => { this.root = root } }
                {...props}
                className={className}
                use:color={color}
                use:size={size}
                onClick={ this.handleClick }
            >
                { children }
            </button>,
        )
    }
}

export default Button;
