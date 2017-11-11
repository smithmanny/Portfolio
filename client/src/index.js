import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';
import App from './routes';
import registerServiceWorker from './registerServiceWorker';
require('newrelic');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
