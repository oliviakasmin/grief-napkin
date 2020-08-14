import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('main')
)

// import React from 'react';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';

// import store from './store';
// import Routes from './components/Routes';

// render(
//   <Provider store={store}>
//     <Routes />
//   </Provider>,
//   document.getElementById('main')
// );
