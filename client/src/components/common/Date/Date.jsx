import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Date.shadow.css';
import Type from 'prop-types';
import DateFormat from 'dateformat';

class Date extends Component {
  static propTypes = {
    time: Type.number.isRequired,
    format: Type.string,
  };

  static defaultProps = {
    format: 'dd-mm-yyyy HH:MM',
  };

  getFormatDate(time, format) {
    const date = new window.Date(time);
    return DateFormat(date, format);
  }

  render() {
    const { className, time, format } = this.props;
    const { getFormatDate } = this;

    return styled(styles)(<content className={className}>{getFormatDate(time, format)}</content>);
  }
}

export default Date;
