import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Button.shadow.css';
import Type from 'prop-types';

class Button extends Component {
    render() {
        const {color, ...props} = this.props

        return styled(styles)(
            <button {...props} use:color={color}>
                <content as="span">{this.props.children}</content>
            </button>,
        )
    }
}

export default Button;
