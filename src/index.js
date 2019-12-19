import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import App from './containers/app/App';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'antd/dist/antd.css';

const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
  });

ReactDOM.render(
    <App history={history} />,
    document.getElementById('root')
);