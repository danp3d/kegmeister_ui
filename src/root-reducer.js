import { combineReducers } from 'redux';
import statusReducer from './components/status/ducks';

const rootReducer = combineReducers({
  statuses: statusReducer
});

export default rootReducer;
