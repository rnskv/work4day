import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './ToggledList.shadow.css';
import Type from 'prop-types';

import Image from '../Image/index';

import Node from './Node.jsx';
import List from './List.jsx';
import Heading from 'src/components/common/Heading';
import Header from "../../../_LegacyComponents/page/Header";

class ToggledList extends Component {
    static propTypes = {
        list: Type.array.isRequired,
        title: Type.string,
        onElementClick: Type.func
    };

    static defaultProps = {
        title: '',
        onElementClick: () => {}
    };

    constructor(props, context) {
        super(props, context);
        this.root = null;
    }

    render() {
        const { title, list, onElementClick, ...props } = this.props;

        return styled(styles)(
            <content ref={(root) => this.root = root} {...props}>
                { title ? <Heading color='black' size='s'> { title } </Heading> : null }
                <List list={list} onElementClick={onElementClick}/>
            </content>
        )
    }
}

export default ToggledList;
