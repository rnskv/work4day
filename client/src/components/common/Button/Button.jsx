import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Button.css';
import Type from 'prop-types';

class Button extends Component {
    render() {
        return styled(styles)(
            <button {...this.props}>
                <content as="span">{this.props.children}</content>
            </button>,
        )
    }
}

export default Button;
