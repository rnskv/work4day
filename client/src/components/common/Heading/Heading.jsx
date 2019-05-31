import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Heading.shadow.css';
import Type from 'prop-types';

class Heading extends Component {
    static PropTypes = {
        id: Type.number,
        size: Type.oneOf(['xs', 's', 'm', 'l', 'xl'])
    };

    render() {
        const {id, className, children} = this.props;

        const headingProps = {
            id,
            className
        };

        const HEADING_LEVELS = {
            xs: 5,
            s: 4,
            m: 3,
            l: 2,
            xl: 1
        };

        return styled(styles)(
            React.createElement(`h${HEADING_LEVELS[this.props.size]}`,
                headingProps,
                children
            )
        )
    }
}

export default Heading;
