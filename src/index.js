import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/styles.scss'
import './styles/fonts/Sora-Bold.ttf'
import './styles/fonts/Sora-ExtraBold.ttf'
import './styles/fonts/Sora-SemiBold.ttf'
import './styles/fonts/Sora-Regular.ttf'
import './styles/fonts/Sora-Medium.ttf'
import './styles/fonts/Sora-Light.ttf'
import './styles/fonts/Sora-Thin.ttf'
import './styles/fonts/Sora-ExtraLight.ttf'
import './styles/App.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
