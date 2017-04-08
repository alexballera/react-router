import React from 'react'
import {render} from 'react-dom'
import Routers from './router.jsx'
import 'modernizr'

window.jQuery = require('jquery')
window.$ = require('jquery')

import './index.scss'
import 'font-awesome/scss/font-awesome.scss'
import '../node_modules/materialize-css/sass/materialize.scss'
import 'materialize-css'

import prueba from './static/js/jquery.prueba'
import customDom from './static/js/custom-dom'

(() => {
  customDom()
  prueba()
})()

render(
  <Routers />,
  document.getElementById('app')
)
