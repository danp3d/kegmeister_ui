import { STATUS_SUCCESS } from './components/status/ducks';
import Pusher from 'pusher-js';

export const pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY);

export const bindStatusEvents = (dispatch) => {
  const chann = pusher.subscribe('kegmeister');
  chann.bind('status-changed', (event) => {
    return dispatch({
      type: STATUS_SUCCESS,
      statusType: event.type,
      status: Object.assign({}, event.data, {
        type: event.type
      })
    });
  });
};
