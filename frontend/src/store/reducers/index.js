import {combineReducers} from 'redux';
import postReducer from './post';

const reducers = {
  postReducer,
};

const appReducer = () => combineReducers(reducers);

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
