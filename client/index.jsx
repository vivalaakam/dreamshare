import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import style from './styles/main.scss';
import Root from './containers/Root';

const root = document.getElementById('root');
root.classList.add(style.root);
ReactDOM.render(
  <Root />,
  root
);
