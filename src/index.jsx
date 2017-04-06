import React from 'react'
import {render} from 'react-dom'
import Routers from './router.jsx'
import './index.scss'
import 'font-awesome/scss/font-awesome.scss'
import '../node_modules/materialize-css/sass/materialize.scss'
window.jQuery = require('jquery')
window.$ = require('jquery')
import 'materialize-css'

(() => {
  var div = document.createElement('div')
  div.setAttribute('id', 'container')
  document.body.prepend(div)
})()

render(
  <Routers />,
  document.getElementById('container')
)
