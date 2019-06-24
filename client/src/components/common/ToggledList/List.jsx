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
    setActiveElementInCategory: Type.func.isRequired,
    selectable: Type.func.isRequired,
    activeElements: Type.object.isRequired,
    value: Type.oneOfType([Type.string, Type.number]),
    category: Type.string,
  };

  static defaultProps = {
    category: '',
  };

  render() {
    const { activeElements, setActiveElementInCategory, category, list, selectable, ...props } = this.props;

    return styled(styles)(
      <ul {...props}>
        {list.map((node, index) => {
          const isAutoCategory = category.indexOf('auto_category') !== -1;
          const isFirstAutoCategory = !node.category && !category;

          const nodeValue = node.value || index;

          const nodeCategory = isFirstAutoCategory
            ? `auto_category_${nodeValue}`
            : isAutoCategory
            ? `${category}_${nodeValue}`
            : node.category || category;

          return (
            <Node
              key={`node_${index}`}
              value={nodeValue}
              name={node.name}
              list={node.list}
              category={nodeCategory}
              setActiveElementInCategory={setActiveElementInCategory}
              activeElements={activeElements}
              selectable={selectable}
            />
          );
        })}
      </ul>,
    );
  }
}

export default List;
