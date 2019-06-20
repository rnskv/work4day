import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './ToggledList.shadow.css';
import Type from 'prop-types';
import { Transition } from 'react-transition-group';

import Image from '../Image/index';
import Node from './Node.jsx';


class List extends Component {
    static propTypes = {
        list: Type.array.isRequired,
        onElementClick: Type.func,
        value: Type.oneOfType([Type.string, Type.number]),
        category: Type.string
    };

    static defaultProps = {
        onElementClick: () => {},
        category: ''
    };

    state = {
        selectedElement: null,
    };

    selectElement = (value) => {
        const { selectedElement } = this.state;
        this.setState({
            selectedElement: selectedElement === value ? null : value
        });
    };

    render() {
        const { category, onElementClick, list, ...props }  = this.props;
        const { selectedElement } = this.state;

        return styled(styles)(
            <ul {...props} >
                {
                    list.map((node, index) => {

                        const nodeValue = node.value || index;
                        const isActive = selectedElement === nodeValue

                        return (
                            <Node
                                key={`node_${index}`}
                                value={nodeValue}
                                name={node.name}
                                list={node.list}
                                onElementClick={onElementClick}
                                selectElement = {this.selectElement}
                                isActive = {isActive}
                                category={node.category || category}
                            />
                        )
                    })
                }
            </ul>
        )
    }
}

export default List;
