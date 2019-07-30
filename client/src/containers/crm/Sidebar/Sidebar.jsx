import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Sidebar.shadow.css';
import { observer, inject } from 'mobx-react';

import Type from 'prop-types';

import SidebarItem from './SidebarItem.jsx';

class Sidebar extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super();

    this.items = [
      {
        name: 'Офферы',
        link: '/crm/offers',
      },
      {
        name: 'Города',
        link: '/crm/cities',
      },
      {
        name: 'Группы',
        link: '/crm/groups',
      },
      {
        name: 'Категории',
        link: '/crm/categories',
      },
    ];
  }

  render() {
    const { OffersStore, className } = this.props;

    return styled(styles)(
      <content className={className}>
        {this.items.map(item => (
          <SidebarItem link={item.link} key={item.name}>
            {' '}
            {item.name}{' '}
          </SidebarItem>
        ))}
      </content>,
    );
  }
}

export default Sidebar;
