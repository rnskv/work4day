import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './ToggledList.shadow.css';
import Type from 'prop-types';

import Image from '../Image/index';

class Node extends Component {
    static propTypes = {
        name: Type.string.isRequired,
        renderList: Type.func.isRequired,
        list: Type.array,
    };

    static defaultProps = {
        list: []
    };

    state = {
        opened: false
    };

    toggleList() {
        const { opened } = this.state;
        this.setState({
            opened: !opened
        })
    }

    handleNameClick = () => {
        this.toggleList()
    };

    render() {
        const { name, list, renderList, ...props } = this.props;
        const { opened } = this.state;

        return styled(styles)(
            <li
                use:hasList={ list.length !== 0 }
            >
                <span onClick={this.handleNameClick} >
                    { name }
                    -
                    { list.length }
                 </span>
                { opened && list && renderList(list) }
            </li>
        )
    }
}

export default Node;
