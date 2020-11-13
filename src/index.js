import 'react-app-polyfill/ie9'
import 'react-app-polyfill/ie11'
import "@babel/polyfill"
import 'raf/polyfill'
import React from 'react'
import ReactDOM from "react-dom"
import './App.sass'
import App from './App'
import './assets/sass/all.sass'

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);