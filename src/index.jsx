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


const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose; 
    
const enhancer = composeEnhancers(applyMiddleware(thunk));
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