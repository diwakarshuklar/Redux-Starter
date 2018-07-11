import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { PeopleReducer } from './reducers';

const appReducer = combineReducers({
  form: formReducer,
  people: PeopleReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(__DEV__ ? logger: null, thunk));
};

export default configureStore;