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
    setActiveElementInCategory: Type.func.isRequired,
    activeElements: Type.object.isRequired,
    selectable: Type.bool.isRequired,
    list: Type.array,
    category: Type.string,
  };

  static defaultProps = {
    list: [],
    category: '',
  };

  constructor() {
    super();
    this.animationDuration = 200;
    this.listAnimationProperties = {
      defaultStyle: {
        transition: `${this.animationDuration}ms`,
        position: 'relative',
        display: 'none',
      },
      transitionStyles: {
        entering: {
          top: -20,
          opacity: 0,
          display: 'block',
        },
        entered: {
          top: 0,
          opacity: 1,
          display: 'block',
        },
        exiting: {
          top: -20,
          opacity: 0,
          display: 'block',
        },
      },
    };
  }

  state = {
    opened: false,
    selectedElement: null,
  };

  toggleList() {
    const { opened } = this.state;
    this.setState({
      opened: !opened,
    });
  }

  handleNameClick = (name, category, value, isFinalElement) => () => {
    this.toggleList();
    if (isFinalElement) {
      const { setActiveElementInCategory } = this.props;
      setActiveElementInCategory(category, value);
    }
  };

  renderAnimatedList(list) {
    const { opened } = this.state;
    const { setActiveElementInCategory, activeElements, selectable } = this.props;
    const { defaultStyle, transitionStyles } = this.listAnimationProperties;

    return (
      <Transition in={opened} timeout={{ enter: 0, exit: this.animationDuration }} appear={false}>
        {state => (
          <List
            list={list}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
            category={this.props.category}
            setActiveElementInCategory={setActiveElementInCategory}
            activeElements={activeElements}
            selectable={selectable}
          />
        )}
      </Transition>
    );
  }

  renderArrowIcon() {
    const { opened } = this.state;
    return <Icon color={'black'} awesomeClass={`fas fa-angle-${opened ? 'up' : 'down'}`} isAwesome />;
  }

  render() {
    const { activeElements, category, value, name, list, selectable } = this.props;
    const isFinalElement = !list.length;
    const isActive = activeElements[category] === value;
    const hasList = list.length > 0;

    return styled(styles)(
      <li use:hasList={hasList} use:isActive={isActive} use:selectable={selectable && !hasList && !isActive}>
        <span onClick={this.handleNameClick(name, category, value, isFinalElement)}>
          {name}
          {!isFinalElement ? this.renderArrowIcon() : null}
        </span>
        {!isFinalElement ? this.renderAnimatedList(list) : null}
      </li>,
    );
  }
}

export default Node;
