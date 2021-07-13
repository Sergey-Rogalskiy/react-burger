import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';

import ErrorBoundry from './components/utils/error-boundry';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';
import { rootReducer } from './services/reducers';
import { BrowserRouter as Router } from 'react-router-dom';

import { socketMiddleware } from './services/socket-midleware' 
import { socketMiddlewareAuth } from './services/socket-midleware-auth';

// declare global {
//   interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
// }

const composeEnhancers =
  typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose; 
    
const enhancer = composeEnhancers(applyMiddleware(socketMiddleware(), socketMiddlewareAuth(), thunk));
const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundry>
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
    </ErrorBoundry>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();