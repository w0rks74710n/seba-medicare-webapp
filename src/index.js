import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import './index.css'
import App from './containers/App/App'
import registerServiceWorker from './registerServiceWorker'
import 'react-md/dist/react-md.indigo-pink.min.css'
import WebFont from 'webfontloader'
import configureStore from './redux/store';

const store = configureStore();

WebFont.load({
  google: {
    families: ['Quicksand:400, 500, 700, 900', 'Material Icons'],
  },
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
