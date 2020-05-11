import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux'
import middleware from '../src/middleware'
import reducer from '../src/reducers'
import {createStore} from "redux";


const store = createStore(reducer,middleware);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

