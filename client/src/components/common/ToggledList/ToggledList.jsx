import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './ToggledList.shadow.css';
import Type from 'prop-types';

import Image from '../Image/index';

import Node from './Node.jsx';

class ToggledList extends Component {
    static propTypes = {

    };

    constructor(props, context) {
        super(props, context);
        this.root = null;

        this.mock = [
            {
                name: 'Пункт 1',
                list: [
                    {
                        name: 'Подпункт 1',
                        list: [
                            {
                                name: 'Подподпункт 1'
                            },
                            {
                                name: 'Подподпункт 2',
                                list: [
                                    {
                                        name: 'Подподподпункт 1'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Подпункт 2',
                    }
                ]
            },
            {
                name: 'Пункт 1',
                list: [
                    {
                        name: 'Подпункт 1',
                    }
                ]
            }
        ]

    }

    handleOnClick = (event) => {
        const childList = event.currentTarget.querySelector('ul');
    };

    renderList = (list) => {
        return (
            <ul>
                {
                    list.map((node, index) => {
                        return (
                            <Node key={`node_${index}`} renderList={this.renderList} name={node.name} list={node.list}/>
                        )
                    })
                }
            </ul>
        )
    }

    render() {
        const { ...props } = this.props;

        return styled(styles)(
            this.renderList(this.mock)
        )
    }
}

export default ToggledList;
