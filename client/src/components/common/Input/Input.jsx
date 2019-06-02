import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Input.shadow.css';
import Type from 'prop-types';

import Image from '../Image';

class Input extends Component {
    static propTypes = {
        size: Type.oneOf(['s', 'm', 'l']).isRequired,
        className: Type.string,
        icon: Type.bool
    };

    constructor(props, context) {
        super(props, context);
        this.root = null;
    }

    render() {

        const { size, icon, children, ...props } = this.props;
        return styled(styles)(
            <content {...props} use:size={size}>
                <input
                    ref={ root => { this.root = root }}
                />
                {
                    icon && <Image width={38} height={38} cover src={'https://pp.userapi.com/c845018/v845018712/c0eda/uYum5AGdw3k.jpg?ava=1'} alt={'icon'} />
                }
            </content>
        )
    }
}

export default Input;
