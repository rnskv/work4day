import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './ToggledList.shadow.css';
import Type from 'prop-types';

import { Transition } from 'react-transition-group';

import List from './List.jsx';
import Icon from 'src/components/common/Icon';

class Node extends Component {
    static propTypes = {
        name: Type.string.isRequired,
        onElementClick: Type.func,
        list: Type.array,
        selectElement: Type.func,
        category: Type.string
    };

    static defaultProps = {
        list: [],
        onElementClick: () => {},
        selectElement: () => {},
        category: ''
    };

    constructor() {
        super();
        this.animationDuration = 200;
        this.listAnimationProperties = {
            defaultStyle: {
                transition: `${this.animationDuration}ms`,
                position: 'relative',
                display: 'none'
            },
            transitionStyles: {
                entering: {
                    top: -20,
                    opacity: 0,
                    display: 'block',
                },
                entered:  {
                    top: 0,
                    opacity: 1,
                    display: 'block',
                },
                exiting:  {
                    top: -20,
                    opacity: 0,
                    display: 'block',
                },
            }
        }
    }

    state = {
        opened: false,
        selectedElement: null
    };

    toggleList() {
        const { opened } = this.state;
        this.setState({
            opened: !opened
        })
    }

    handleNameClick = (name, category, value, isFinalElement) => () => {
        this.toggleList();
        if (isFinalElement) {
            this.props.onElementClick(category, value);
            this.props.selectElement(value);
        }
     };

    renderAnimatedList(list) {
        const { opened } = this.state;
        const { onElementClick } = this.props;
        const { defaultStyle, transitionStyles } = this.listAnimationProperties;
        return (
            <Transition
                in={opened} timeout={{ enter: 0, exit: this.animationDuration}} appear={false}
            >
                {
                    state =>
                    <List list={list}
                          onElementClick={onElementClick}
                          style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                          }}
                          category={this.props.category}
                    />
                }
            </Transition>
        )
    }

    renderArrowIcon() {
        const { opened } = this.state;
        return <Icon color={'black'} awesomeClass={`fas fa-angle-${opened ? 'up' : 'down'}`} isAwesome />;
    }

    render() {
        const { category, value, isActive, name, list, renderList, ...props } = this.props;
        const { opened } = this.state;
        const isFinalElement = !list.length;

        return styled(styles)(
                <li
                    use:hasList={ list.length !== 0 }
                    use:isActive={ isActive }
                >
                    <span onClick={this.handleNameClick(name, category, value, isFinalElement) }>
                        { name }
                        { !isFinalElement ? this.renderArrowIcon() : null }
                     </span>
                    {

                        !isFinalElement ? this.renderAnimatedList(list) : null
                    }
                </li>
        )
    }
}

export default Node;
