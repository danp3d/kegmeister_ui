import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';

const finalCreateStore = compose(applyMiddleware(thunk))(createStore);

const defaultInitialState = {
  statuses: {
    temperature: {},
    state: {}
  }
};

export default function configureStore(initialState = defaultInitialState) {
  const store = finalCreateStore(rootReducer, initialState);
  return store;
}
