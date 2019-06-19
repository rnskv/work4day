import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './ToggledList.shadow.css';
import Type from 'prop-types';

import { Transition } from 'react-transition-group';

import List from './List.jsx';
const duration = 300;

const defaultStyle = {
    transition: `${duration}ms`,
    position: 'relative'
};

const transitionStyles = {
    entering: {
        left: -10,
        opacity: 0
    },
    entered:  {
        left: 0,
        opacity: 1
    },
    exiting:  {
        left: -10,
        opacity: 0
    },
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

    renderAnimatedList(list) {
        const { opened } = this.state;

        return (
            <Transition
                in={opened} timeout={{ enter: 0, exit: duration}} appear={false} unmountOnExit
            >
                { state => <List list={list} style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}/> }
            </Transition>
        )
    }

    render() {
        const { name, list, renderList, ...props } = this.props;
        const { opened } = this.state;

        return styled(styles)(
                <li
                    use:hasList={ list.length !== 0 }
                >
                    <span onClick={this.handleNameClick}>
                        { name }
                     </span>
                    {

                        list.length ? this.renderAnimatedList(list) : null
                    }
                </li>
        )
    }
}

export default Node;
