import React, { Component, PropTypes } from 'react';
import { statusTypes, dateFormat } from './constants';
import moment from 'moment';
import './style.css';

class StatusInfo extends Component {
  static get propTypes() {
    return {
      type: PropTypes.string.isRequired,
      value: PropTypes.string,
      datetime: PropTypes.number
    }
  }

  get statusClass() {
    return `Status-${this.props.type}`;
  }

  get type() {
    const { type } = this.props;
    return type;
  }

  get title() {
    return this.type[0].toUpperCase() + this.type.substring(1);
  }

  get value() {
    let value = this.props.value;
    if (this.type === statusTypes.temperature)
       value += ' °C';

    return value;
  }

  render() {
    return (
      <div className={this.statusClass}>
        <h3>{this.title}:</h3>
        <span>{this.value}</span>
        <div className="Status-time">
          <span>{moment(this.props.datetime).format(dateFormat)}</span>
        </div>
      </div>
    );
  }
}

export default StatusInfo
