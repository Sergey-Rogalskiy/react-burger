import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';

import ErrorBoundry from './components/utils/error-boundry';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

 import { store } from './store';



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