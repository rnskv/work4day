import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './ToggledList.shadow.css';
import Type from 'prop-types';

import List from './List.jsx';

import Heading from 'src/components/common/Heading';

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

    state = {
        activeElements: {}
    };

    setActiveElementInCategory = (category, value) => {
        const { onElementClick } = this.props;
        const { activeElements } = this.state;

        const activeElementValue = activeElements[category] === value ? null : value;

        const newActiveElements = {
            ...activeElements,
            [category]: activeElementValue
        };

        this.setState({
            activeElements: newActiveElements
        });

        onElementClick(category, activeElementValue);

    };

    render() {
        const { title, list } = this.props;
        const { activeElements } = this.state;

        return styled(styles)(
            <content ref={(root) => this.root = root}>
                {
                    title
                        ? <Heading color='black' size='s'> { title }</Heading>
                        : null
                }
                <List
                    list={list}
                    activeElements={activeElements}
                    setActiveElementInCategory={this.setActiveElementInCategory}
                />
            </content>
        )
    }
}

export default ToggledList;
