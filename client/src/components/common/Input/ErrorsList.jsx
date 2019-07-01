import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Input.shadow.css';
import Type from 'prop-types';

class ErrorsList extends Component {
  static propTypes = {
    errors: Type.array.isRequired,
  };

  render() {
    const { errors } = this.props;

    return styled(styles)(
      <ul>
        {errors.map((error, key) => (
          <li key={key}> {error.message} </li>
        ))}
      </ul>,
    );
  }
}

export default ErrorsList;
