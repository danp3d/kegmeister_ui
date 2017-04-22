import React, { Component, PropTypes } from 'react';
import { createReduxConnection } from './ducks';
import { statusTypes, statusTypeList } from './constants';
import StatusInfo from './status-info';
import './style.css';

class Status extends Component {
  static get propTypes() {
    return {
      [statusTypes.temperature]: PropTypes.object.isRequired,
      [statusTypes.state]: PropTypes.object.isRequired
    };
  }

  componentWillMount() {
    statusTypeList.forEach((type) => this.props.fetchStatus(type));
  }

  renderStatus(status) {
    const { type, datetime } = status;
    if (!type)
      return null;

    const value = status[type];
    return <StatusInfo key={type} type={type} value={value} datetime={datetime} />;
  }

  render() {
    return (
      <div className="Status-wrapper">
        <div className="Status-body">
          {statusTypeList.map((t) => this.renderStatus(this.props[t]))}
        </div>
        <div className="Status-footer">
          <p>Current status as notified by the controller circuit</p>
        </div>
      </div>
    );
  }
}

export default createReduxConnection()(Status);
