import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CustomLink extends Component {
  render() {
    const { to, children } = this.props;
    return (
      <li>
        <Link to={to}>{children}</Link>
      </li>
    );
  }
}

export default CustomLink;
