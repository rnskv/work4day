import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Sidebar.shadow.css';
import { Link } from 'react-router-dom';

import { observer, inject } from 'mobx-react';

import Type from 'prop-types';

class Sidebar extends Component {
  static propTypes = {
    link: Type.string.isRequired,
  };

  static defaultProps = {};

  constructor(props) {
    super();
  }

  render() {
    const { OffersStore, className, children, link } = this.props;

    return styled(styles)(
      <li className={className}>
        <Link to={link}>{children}</Link>
      </li>,
    );
  }
}

export default Sidebar;
