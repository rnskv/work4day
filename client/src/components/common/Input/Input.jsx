import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Input.shadow.css';
import Type from 'prop-types';

import Image from '../Image';

class Input extends Component {
    static propTypes = {
        size: Type.oneOf(['s', 'm', 'l']).isRequired,
        className: Type.string,
        icon: Type.any
    };

    constructor(props, context) {
        super(props, context);
        this.root = null;
    }

    render() {
        const {size, icon, children, ...props } = this.props;

        return styled(styles)(
            <content {...props} use:size={size}>
                <input
                    ref={ root => { this.root = root }}
                />
                { icon }
            </content>
        )
    }
}

export default Input;
