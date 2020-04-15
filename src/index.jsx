import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
//testing


ReactDOM.render(<BrowserRouter basename="http://localhost:3000"><App /> </BrowserRouter>, document.getElementById('root'));
