import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Date.shadow.css';
import Type from 'prop-types';
import DateFormat from 'dateformat';

class Date extends Component {
  static propTypes = {
    date: Type.string.isRequired,
    format: Type.string,
  };

  static defaultProps = {
    format: 'dd-mm-yyyy HH:MM',
  };

  getFormatDate(date, format) {
    const dateObject = new window.Date(date);
    return DateFormat(dateObject, format);
  }

  render() {
    const { className, date, format } = this.props;
    const { getFormatDate } = this;

    return styled(styles)(<content className={className}>{getFormatDate(date, format)}</content>);
  }
}

export default Date;
