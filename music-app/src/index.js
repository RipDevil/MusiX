import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/app/App';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css'; // TODO: maybe isn't needed because there is Ant
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);