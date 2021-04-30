import React from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';
import './assets/scss/style.scss';

import App from './app';

const $root = document.getElementById('root')

ReactDOM.render(<App />, $root);