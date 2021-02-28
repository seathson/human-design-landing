import React from 'react'
import ReactDOM from "react-dom"
import './App.sass'
import App from './App'
import './assets/sass/all.sass'
import smoothscroll from 'smoothscroll-polyfill'
import { BrowserRouter } from 'react-router-dom'

smoothscroll.polyfill();

ReactDOM.render(
  <BrowserRouter basename={process.env.NODE_ENV === 'production' ? 'human-design-landing' : ''}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);