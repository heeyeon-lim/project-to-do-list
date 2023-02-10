import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// determine which components have access to store ==> APP, everything! 
import { Provider } from 'react-redux'

import store from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
