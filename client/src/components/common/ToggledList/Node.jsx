import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './ToggledList.shadow.css';
import Type from 'prop-types';

import { Transition } from 'react-transition-group';

import List from './List.jsx';
const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
};

const transitionStyles = {
    entering: { opacity: 0 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
};

class Node extends Component {
    static propTypes = {
        name: Type.string.isRequired,
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
                    <Transition
                        in={opened} timeout={{ enter: 0, exit: 500}} appear={false} unmountOnExit
                    >
                        { state => <List list={list} style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}/> }
                    </Transition>
                </li>
        )
    }
}

export default Node;
