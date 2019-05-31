import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Button.shadow.css';
import Type from 'prop-types';

class Button extends Component {
    static propTypes = {
        color: Type.oneOf(['white', 'blue']),
        size: Type.oneOf['s', 'm', 'b'],
        className: Type.string,
    };

    render() {
        const {color, size, className, children} = this.props;

        return styled(styles)(
            <button className={className} use:color={color} use:size={size}>
                { children }
            </button>,
        )
    }
}

export default Button;
