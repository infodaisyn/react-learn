import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Layout />, document.getElementById('root'));
registerServiceWorker();
