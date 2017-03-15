import fetch from 'isomorphic-fetch';

export const STATUS_REQUEST = 'STATUS_REQUEST';
export const STATUS_SUCCESS = 'STATUS_SUCCESS';
export const STATUS_FAILURE = 'STATUS_FAILURE';

export const fetchStatus = type => dispatch => {
  dispatch({
    type: STATUS_REQUEST,
    statusType: type
  });

  return fetch(`https://qr6atys5pc.execute-api.us-east-1.amazonaws.com/dev/${type}`, {
    json: true
  }).then((res) => {
    if (res.statusCode < 200 || res.statusCode > 299)
      throw new Error('Failed to fetch: ' + res.statusCode);

    return res.json();
  }).then((body) => {
    dispatch({
      type: STATUS_SUCCESS,
      statusType: type,
      status: body
    });
  }).catch((err) => {
    dispatch({
      type: STATUS_FAILURE,
      statusType: type,
      error: err
    });
  });
};

export default (statuses = {}, action) => {
  switch(action.type) {
  case STATUS_REQUEST:
    return Object.assign({}, statuses, {
      [action.statusType]: Object.assign({}, statuses[action.statusType], {
        isLoading: true
      })
    });
  case STATUS_SUCCESS:
    return Object.assign({}, statuses, {
      [action.statusType]: Object.assign({}, action.status, {
        isLoading: false
      }),
    });
  case STATUS_FAILURE:
    return Object.assign({}, statuses, {
      [action.statusType]: {
        isLoading: false,
        error: action.error
      }
    });
  default:
    return statuses;
  }
};
