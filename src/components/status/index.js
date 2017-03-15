import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchStatus } from './ducks';
import moment from 'moment';
import './style.css';

class Status extends Component {
  static get propTypes() {
    return {
      temperature: PropTypes.object.isRequired,
      state: PropTypes.object.isRequired
    };
  }

  componentWillMount() {
    this.props.fetchStatus('temperature');
    this.props.fetchStatus('state');
  }

  renderStatus(status) {
    const type = status.type;
    if (!type)
      return null;

    const statusClass = `Status-${type}`;
    const statusTitle = type[0].toUpperCase() + type.substr(1);

    let statusValue = status[type];
    if (type === 'temperature')
      statusValue += ' °C';

    return (
      <div className={statusClass} key={type}>
        <h3>{statusTitle}:</h3>
        <span>{statusValue}</span>
        <div className="Status-time">
          <span>{moment(status.datetime).format('DD/MM/YYYY hh:mm:ss')}</span>
        </div>
      </div>

    );
  }

  render() {
    return (
      <div className="Status-wrapper">
        <div className="Status-body">
          {['temperature', 'state'].map((t) => this.renderStatus(this.props[t]))}
        </div>
        <p>Current status as notified by the controller circuit</p>
      </div>
    );
  }
}

export default connect((state) => {
  return { 
    temperature: state.statuses.temperature,
    state: state.statuses.state
  };
}, (dispatch) => {
  return { 
    fetchStatus: (...args) => dispatch(fetchStatus(...args))
  };
})(Status);
