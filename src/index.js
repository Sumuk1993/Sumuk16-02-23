import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import something from somelibrary/somelocation
import MyComponent1 from './MyComponent1';

const root = ReactDOM.createRoot(document.querySelector('div#container'));
root.render(
  <React.StrictMode>
    <MyComponent1/>
  </React.StrictMode>
);


