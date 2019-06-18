import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './ToggledList.shadow.css';
import Type from 'prop-types';
import { Transition } from 'react-transition-group';

import Image from '../Image/index';
import Node from './Node.jsx';


class List extends Component {
    static propTypes = {
        list: Type.array.isRequired
    };

    render() {
        const { list, ...props }  = this.props;
        return styled(styles)(
            <ul {...props} >
                {
                    list.map((node, index) => {
                        return (
                            <Node key={`node_${index}`} name={node.name} list={node.list}/>
                        )
                    })
                }
            </ul>
        )
    }
}

export default List;
