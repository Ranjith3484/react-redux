import {combineReducers} from 'redux';
import countReducer from './countReducer.js';
import insertReducer from './insertReducer';
import postReducer from './postReducer';

const allReducers= combineReducers({
  count: countReducer,
  form: insertReducer,
  post:postReducer
});

export default allReducers;