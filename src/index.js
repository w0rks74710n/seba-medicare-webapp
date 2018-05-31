"use strict";

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './containers/App/App'
import registerServiceWorker from './registerServiceWorker'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Nunito Sans:400, 500, 700, 900', 'Material Icons'],
  },
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
