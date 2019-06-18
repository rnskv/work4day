import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './ToggledList.shadow.css';
import Type from 'prop-types';

import Image from '../Image/index';

import Node from './Node.jsx';
import List from './List.jsx';

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
                                    },
                                    {
                                        name: 'Кек',
                                        list: [
                                            {
                                                name: 'Подподподпункт 1',
                                                list: [
                                                    {
                                                        name: 'Ей нужна скорость',
                                                        list: [
                                                            {
                                                                name: 'Подподподпункт 1'
                                                            },
                                                            {
                                                                name: 'Что то еще',
                                                                list: [
                                                                    {
                                                                        name: 'Подподподпункт 1',
                                                                        list: [
                                                                            {
                                                                                name: 'Ей нужна скорость',

                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        name: 'Подподпункт 2',
                                                        list: [
                                                            {
                                                                name: 'Подподподпункт 1'
                                                            },
                                                            {
                                                                name: 'Что то еще',
                                                                list: [
                                                                    {
                                                                        name: 'Подподподпункт 1',
                                                                        list: [
                                                                            {
                                                                                name: 'Ей нужна скорость',
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
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

    render() {
        const { ...props } = this.props;

        return styled(styles)(
            <List list={this.mock}/>
        )
    }
}

export default ToggledList;
