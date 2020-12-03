import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux';

//selector
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILED = 'LOGIN_FAILED'

//actions
export const LoginSuccessAction = () => ({type: LOGIN_SUCCESS })
export const LoginFailedAction = () => ({type: LOGIN_FAILED })

//reducer
export const authReducer= (state, actions) => {
  switch(actions.type){
    case LOGIN_SUCCESS:
      return {
        ...state,
        access: true
      }
    case LOGIN_FAILED:
      return {
        ...state,
        access: false
      }
    default:
      return {
        ...state,
        access: false,
      }
  }
}

//store
let store = createStore(authReducer);
//store.subscribe(()=>{console.log(store.getState())});

// store.dispatch(LoginSuccessAction());
// store.dispatch(LoginFailedAction());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
